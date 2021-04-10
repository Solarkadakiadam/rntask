import moment from "moment"
import "moment/locale/tr"
import { Alert, Linking } from "react-native"


const UNIT_CONVERSIONS = {
    KG_TO_POUND: 2.2046226218,
    FOOT_TO_CM: 30.48,
    INCH_TO_CH: 2.54,
}

const formBottomPadding = 20

const isCustomer = () => {
    return (global?.userInfo?.KullaniciTipi == 4 || global?.userInfo?.KullaniciTipi == 5)
}

const isCompany = () => {
    return (global?.userInfo?.KullaniciTipi == 2)
}

const isAdmin = () => {
    return (global?.userInfo?.KullaniciTipi == 1)
}
const isCompanyApproved = () => {
    return (global.firmaInfo?.OnayDurumu != 1 && global.firmaInfo?.OnayDurumu != 2 && global.firmaInfo?.OnayDurumu != 3)
}

const isNullOrEmpty = (text) => text === undefined || text === "" || text === null;
const apiDateFormatToUserFormat = (date, showTime) => {
    if (isNullOrEmpty(date))
        return null;
    if (isNaN(Date.parse(date)))
        return null;
    var parsedDate = new Date(date);
    if (parsedDate === NaN)
        return null;
    if (showTime) {
        let time = moment(parsedDate).locale("tr")
        return time.format('LLL')
    }
    // return parsedDate.toLocaleString('tr-TR', { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    else {
        let time = moment(parsedDate).locale("tr")
        return time.format('LL')

    }
}

const apiDateFormatToUserFormatWithDot = (date, showTime) => {
    if (isNullOrEmpty(date))
        return null;
    if (isNaN(Date.parse(date)))
        return null;
    var parsedDate = new Date(date);
    if (parsedDate === NaN)
        return null;
    if (showTime)
        return parsedDate.toLocaleString()
    else
        return parsedDate.toLocaleDateString('tr-TR').replace(/\//g, '.');
}


const FootAndInchToCm = (foot, inch) => {
    if (inch > 11.9) {
        var addFoots = inch / 12;
        if (!(inch % 12)) {
            inch = 0;
        } else {
            inch = inch % 12;
        }
        foot = foot + parseInt(addFoots.toFixed(0), 10);
    }

    var cm = foot * UNIT_CONVERSIONS.FOOT_TO_CM;
    cm += inch * UNIT_CONVERSIONS.INCH_TO_CH;

    return cm.toFixed(2);
}

const scrollToTopScrollView = (ref) => {
    if (ref?.current !== null)
        ref?.current?.scrollTo({ x: 0, y: 0, animated: true });
}

const cmToFootAndInch = (cm) => {
    var approxFoot = (cm / UNIT_CONVERSIONS.FOOT_TO_CM);
    var decimals = approxFoot % 1;
    var inch = Math.round(decimals * 12);
    var foot = (parseFloat(cm) < UNIT_CONVERSIONS.FOOT_TO_CM) ? 0 : Math.floor(approxFoot);

    return {
        foot: foot,
        inch: inch
    };
}
const kgToPound = (kg) => {
    return (kg * UNIT_CONVERSIONS.KG_TO_POUND).toFixed(1);
}

const poundToKg = (pound) => {
    return (pound / UNIT_CONVERSIONS.KG_TO_POUND).toFixed(1);
}
const dateToEndDate = (dateString) => {
    if (!isNullOrEmpty(dateString)) {
        const date = new Date(dateString);
        date.setHours(23);
        date.setMinutes(58);
        return date.toISOString();
    }
    return null;
}

const isNumber = value => matchRegexp(value, /^\d+$/);

const isFloat = (value) => {
    const isFloatx = matchRegexp(value, /^(?:-?[1-9]\d*|-?0)?(?:\.\d+)?$/i);
    return isFloatx;
}

const matchRegexp = (value, regexp) => {
    const validationRegexp = (regexp instanceof RegExp ? regexp : (new RegExp(regexp)));
    return (validationRegexp.test(value));
}

const getRecordCountText = (reducerData) => {
    // if (reducerData?.loading && reducerData?.totalRecordCount === 0)
    //     return "";
    return `(${reducerData?.loading ? "..." : reducerData?.totalRecordCount
        })`
}

const alertNotAuthForCompany = () => {
    Alert.alert("Hata!", "Bu sayfaya erişmek için yetkiniz bulunmuyor.", [{ text: "Tamam" }])
}

const openProfileImage = (image) => {
    if (!isNullOrEmpty(image)) {
        global.openFile("profileimage." + image?.substr(image.lastIndexOf('.') + 1), image)
    }
    return null
}

function removeEmojis(string) {
    var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
    return string.toString().replace(regex, '');
}

const PhoneRegex = "[\\+]\\d{2}[ ][\\(]\\d{3}[\\)][ ]\\d{3}[\\-]\\d{4}";


const DueDateFormat = (endDateTime = new Date(), startDateTime = new Date()) => {
    const diffTime = Math.abs(endDateTime - startDateTime);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (10000 > diffTime) {
        return "EXPIRED"
    }

    if (diffDays >= 30) {
        var months = Math.ceil(diffDays / 30);
        if (months >= 12) {
            return "Indefinitely";
        }
        return `DUE IN ${months} ${(months === 1 ? "MONTH" : "MONTHS")}`;
    }

    if (diffDays >= 7) {
        const weeks = Math.ceil(diffDays / 7);
        return `DUE IN ${weeks} ${(months === 1 ? "WEEK" : "WEEKS")}`;
    }

    if (diffDays >= 2) {
        return `DUE IN ${diffDays} DAYS`;
    }
    if (diffDays === 1)
        return "DUE TOMORROW"
    return "DUE TODAY"
}

const DueDateTimeFormat = (endDateTime = new Date(), startDateTime = new Date()) => {
    const diffTime = Math.abs(endDateTime - startDateTime);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const diffDate = new Date(diffTime);
    if (diffDate.getHours() < 1) {
        if (diffDate.getMinutes() > 0) {
            return `DUE ${diffDate.getMinutes()} Minute(s)`;
        }
        return endDateTime.toLocaleDateString();
    }
    return `DUE ${diffDate.getHours()} Hour(s)`;


    if (10000 > diffTime) {
        return "EXPIRED"
    }

    if (diffDays >= 30) {
        var months = Math.ceil(diffDays / 30);
        if (months >= 12) {
            return "Indefinitely";
        }
        return `DUE IN ${months} ${(months === 1 ? "MONTH" : "MONTHS")}`;
    }

    if (diffDays >= 7) {
        const weeks = Math.ceil(diffDays / 7);
        return `DUE IN ${weeks} ${(months === 1 ? "WEEK" : "WEEKS")}`;
    }

    if (diffDays >= 2) {
        return `DUE IN ${diffDays} DAYS`;
    }
    return "DUE TODAY"
}

const CheckAccess = (area, controller, action) => {
    if (global?.roles?.isSuperAdmin)
        return true;
    return global?.roles?.hash?.has(`${area.toLowerCase()}-${controller.toLowerCase()}-${action.toLowerCase()}`)
}
const GenerateRandomString = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const isLoggedIn = x => global.isLoggedIn;
const SendWhatsapp = (phone, message) => {
    let url = "whatsapp://send?text=" + encodeURIComponent(message) + "&phone=" + phone;
    Linking.openURL(url)
        .then(data => {

        })
        .catch(() => {
            Alert.alert("Uyarı!", "Whatsapp telefonunuzda yüklü gözükmüyor. Lütfen Whatsapp uygulamasını kurunuz.", [{ text: "Tamam" }]);  //<---Error
        });
}


const OpenGoogleMaps = (latitude, longitude, fullAddress) => {




    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${latitude},${longitude}`;
    const label = fullAddress;
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
        android: `${scheme}${latLng}(${label})`
    });
    Linking.canOpenURL(url).then(supported => {
        if (supported) {
            Alert.alert("Başarılı", "Cihazınızda Google Maps Bulunmamaktadır!", [{ text: "Tamam" }])
        } else {
            browser_url =
                "https://www.google.de/maps/@" +
                latitude +
                "," +
                longitude +
                "?q=" +
                label;
            return Linking.openURL(browser_url);
        }
    })
        .then(data => {

        })
        .catch(() => {
            Alert.alert("Uyarı!", "Beklenmeyen bir hata yaşandı.", [{ text: "Tamam" }]);  //<---Error
        });
}


const OpenIosMaps = (latitude, longitude, fullAddress) => {




    const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
    const latLng = `${latitude},${longitude}`;
    const label = fullAddress;
    const url = Platform.select({
        ios: `${scheme}${label}@${latLng}`,
    });
    Linking.openURL(url)
        .then(data => {

        })
        .catch(() => {
            Alert.alert("Uyarı!", "Beklenmeyen bir hata yaşandı.", [{ text: "Tamam" }]);  //<---Error
        });
}




const NetworkEror = () => {
    Alert.alert("Hata!", "Sunucu ile iletişime geçilemiyor. Lütfen internet bağlantınızı kontrol ediniz.", [{ text: "Tamam" }])
}
export default {
    isNullOrEmpty,
    SendWhatsapp,
    NetworkEror,
    apiDateFormatToUserFormat,
    FootAndInchToCm,
    isLoggedIn,
    CheckAccess,
    PhoneRegex,
    cmToFootAndInch,
    isNumber,
    isFloat,
    kgToPound,
    isCustomer,
    isCompany,
    alertNotAuthForCompany,
    isCompanyApproved,
    dateToEndDate,
    poundToKg,
    getRecordCountText,
    matchRegexp,
    removeEmojis,
    openProfileImage,
    scrollToTopScrollView,
    DueDateFormat,
    DueDateTimeFormat,
    GenerateRandomString,
    formBottomPadding,
    apiDateFormatToUserFormatWithDot,
    OpenGoogleMaps,
    OpenIosMaps,
    isAdmin
}

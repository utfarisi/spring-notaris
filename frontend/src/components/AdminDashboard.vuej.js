var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import Card from '@/components/CardStat.vue'; // komponen kecil buat kartu ringkasan
import { ref, onMounted } from 'vue';
import api from '@/libs/utils';
var todayAppointments = ref(4);
var inProcessDeeds = ref(7);
var approvedAppointments = ref(24);
var rejectedAppointments = ref(3);
var todayList = ref([]); // ganti dengan tipe data aslimu
var latestDeeds = ref([]);
onMounted(function () { return __awaiter(void 0, void 0, void 0, function () {
    var _a, todayAppointmentRes, statusRes, deedProcessingRes;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, Promise.all([
                    api.get("/admin/dashboard/appointments/today"),
                    api.get('/admin/dashboard/appointments/status'),
                    api.get('/admin/dashboard/deeds/processing')
                ])];
            case 1:
                _a = _b.sent(), todayAppointmentRes = _a[0], statusRes = _a[1], deedProcessingRes = _a[2];
                todayList.value = todayAppointmentRes.data;
                todayAppointments.value = todayList.value.length;
                console.log(" status ", statusRes.data);
                approvedAppointments.value = statusRes.data.confirmed;
                rejectedAppointments.value = statusRes.data.rejected;
                inProcessDeeds.value = deedProcessingRes.data;
                return [2 /*return*/];
        }
    });
}); });
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "p-6 space-y-6" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "grid grid-cols-1 md:grid-cols-4 gap-4" }));
/** @type {[typeof Card, ]} */ ;
// @ts-ignore
var __VLS_0 = __VLS_asFunctionalComponent(Card, new Card({
    title: "Janji Hari Ini",
    icon: "calendar",
    value: (__VLS_ctx.todayAppointments),
}));
var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{
        title: "Janji Hari Ini",
        icon: "calendar",
        value: (__VLS_ctx.todayAppointments),
    }], __VLS_functionalComponentArgsRest(__VLS_0), false));
/** @type {[typeof Card, ]} */ ;
// @ts-ignore
var __VLS_3 = __VLS_asFunctionalComponent(Card, new Card({
    title: "Akta Diproses",
    icon: "file-text",
    value: (__VLS_ctx.inProcessDeeds),
}));
var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{
        title: "Akta Diproses",
        icon: "file-text",
        value: (__VLS_ctx.inProcessDeeds),
    }], __VLS_functionalComponentArgsRest(__VLS_3), false));
/** @type {[typeof Card, ]} */ ;
// @ts-ignore
var __VLS_6 = __VLS_asFunctionalComponent(Card, new Card({
    title: "Janji Disetujui",
    icon: "check-circle",
    value: (__VLS_ctx.approvedAppointments),
}));
var __VLS_7 = __VLS_6.apply(void 0, __spreadArray([{
        title: "Janji Disetujui",
        icon: "check-circle",
        value: (__VLS_ctx.approvedAppointments),
    }], __VLS_functionalComponentArgsRest(__VLS_6), false));
/** @type {[typeof Card, ]} */ ;
// @ts-ignore
var __VLS_9 = __VLS_asFunctionalComponent(Card, new Card({
    title: "Janji Ditolak",
    icon: "x-circle",
    value: (__VLS_ctx.rejectedAppointments),
}));
var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([{
        title: "Janji Ditolak",
        icon: "x-circle",
        value: (__VLS_ctx.rejectedAppointments),
    }], __VLS_functionalComponentArgsRest(__VLS_9), false));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bg-white shadow rounded p-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "font-semibold text-lg mb-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)(__assign({ class: "w-full text-left border" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)(__assign({ class: "bg-gray-100 text-sm text-gray-600" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)(__assign({ class: "p-2 border" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)(__assign({ class: "p-2 border" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)(__assign({ class: "p-2 border" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)(__assign({ class: "p-2 border" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.todayList)); _i < _a.length; _i++) {
    var appt = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)(__assign({ key: (appt.id) }, { class: "text-sm" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: "p-2 border" }));
    (appt.appointmentTime);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: "p-2 border" }));
    (appt.customer.firstName);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: "p-2 border" }));
    (appt.status);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)(__assign({ class: "p-2 border space-x-2" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: "bg-green-600 text-white hover:underline px-2 py-1 rounded-xl" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ class: "bg-red-600 text-white hover:underline px-2 py-1 rounded-xl" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "bg-white shadow rounded p-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "font-semibold text-lg mb-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: "space-y-2 text-sm" }));
for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.latestDeeds)); _b < _c.length; _b++) {
    var akta = _c[_b][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ key: (akta.id) }, { class: "border-b pb-2" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "font-semibold" }));
    (akta.code);
    (akta.customer.firstName);
    (akta.status);
}
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-6']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['space-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:underline']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            Card: Card,
            todayAppointments: todayAppointments,
            inProcessDeeds: inProcessDeeds,
            approvedAppointments: approvedAppointments,
            rejectedAppointments: rejectedAppointments,
            todayList: todayList,
            latestDeeds: latestDeeds,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */

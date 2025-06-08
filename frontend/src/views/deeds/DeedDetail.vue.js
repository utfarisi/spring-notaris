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
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import api from '@/libs/utils';
import { useAuthStore } from '@/stores/authStore';
import DeedNumber from '@/components/DeedNumber.vue';
import DeedUserDocument from '@/components/DeedUserDocument.vue';
import SetDeedOnProgress from '@/components/deeds/SetDeedOnProgress.vue';
// Icons - assuming these are properly imported from your icon library
// import { CheckCircle, XCircle, FileText } from 'lucide-vue-next' // Contoh jika menggunakan lucide-vue-next
import { CheckCircle, XCircle, FileText } from 'lucide-vue-next'; // Sesuaikan dengan import icon Anda
var authStore = useAuthStore();
var route = useRoute();
var deed = ref(null);
var selectedStatus = ref('');
var note = ref('');
var statusSteps = ['DRAFT', 'IN_PROGRESS', 'WAITING_SIGNATURE', 'COMPLETED', 'REJECTED'];
// --- Bagian yang Ditambahkan / Dimodifikasi ---
var statusTranslations = {
    'DRAFT': 'DRAFT',
    'IN_PROGRESS': 'SEDANG PROSES',
    'WAITING_SIGNATURE': 'MENUNGGU TANDA TANGAN',
    'COMPLETED': 'KOMPLIT',
    'REJECTED': 'DITOLAK'
};
var translateStatus = function (status) {
    return statusTranslations[status] || status; // Mengembalikan status asli jika tidak ditemukan
};
// --- Akhir Bagian yang Ditambahkan / Dimodifikasi ---
var documents = ref([]);
var onNumberSaved = function (newDeed) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        deed.value = newDeed;
        return [2 /*return*/];
    });
}); };
var onProgresssSaved = function (newDeed) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        deed.value = newDeed;
        return [2 /*return*/];
    });
}); };
var fetchDetail = function () { return __awaiter(void 0, void 0, void 0, function () {
    var detailRes;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, api.get("/deeds/".concat(route.params.id, "/status-history"))];
            case 1:
                detailRes = _b.sent();
                deed.value = detailRes.data;
                documents.value = (_a = detailRes.data) === null || _a === void 0 ? void 0 : _a.deedDocs;
                return [2 /*return*/];
        }
    });
}); };
var selectStatus = function (status) {
    selectedStatus.value = status;
};
var submitStatus = function () { return __awaiter(void 0, void 0, void 0, function () {
    var nextStatusIndex;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                nextStatusIndex = statusSteps.indexOf(deed.value.deedStatus);
                if (nextStatusIndex !== -1 && nextStatusIndex < statusSteps.length - 1) {
                    nextStatusIndex++;
                    selectedStatus.value = statusSteps[nextStatusIndex];
                }
                else {
                    console.warn("Attempted to advance status beyond defined steps or current status not found.");
                }
                console.log("selected Status (after calculation): ", selectedStatus.value);
                return [4 /*yield*/, api.put("/deeds/".concat(route.params.id, "/status"), {
                        status: selectedStatus.value,
                        note: note.value
                    }, { withCredentials: true })];
            case 1:
                _a.sent();
                alert('Status berhasil diperbarui');
                fetchDetail();
                note.value = '';
                return [2 /*return*/];
        }
    });
}); };
onMounted(fetchDetail);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex gap-3 items-center mb-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(__assign({ class: "text-2xl font-semibold w-10/12" }));
if (((_a = __VLS_ctx.deed) === null || _a === void 0 ? void 0 : _a.deedStatus) === 'DRAFT' && __VLS_ctx.authStore.isUser) {
    var __VLS_0 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ to: ({ name: 'EditAktaForm', params: __VLS_ctx.route.params.id }) }, { class: "bg-blue-400 px-4 py-2 rounded-md text-white text-sm" })));
    var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ to: ({ name: 'EditAktaForm', params: __VLS_ctx.route.params.id }) }, { class: "bg-blue-400 px-4 py-2 rounded-md text-white text-sm" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
    __VLS_3.slots.default;
    var __VLS_3;
}
if (__VLS_ctx.authStore.isAdmin) {
    var __VLS_4 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign({ to: ("/operator/deeds/".concat(__VLS_ctx.route.params.id, "/review-documents")) }, { class: "bg-green-500 px-4 py-2 rounded-md text-white text-sm" })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign({ to: ("/operator/deeds/".concat(__VLS_ctx.route.params.id, "/review-documents")) }, { class: "bg-green-500 px-4 py-2 rounded-md text-white text-sm" })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    var __VLS_7;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "gap-8 flex bg-white px-6 py-4 rounded-lg" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-2/3 border-e-2 border-gray-300 " }));
if (__VLS_ctx.deed) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-6" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "grid grid-cols-[auto_auto_1fr] gap-y-3 gap-x-2" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "font-semibold text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.deed.number);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "font-semibold text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.deed.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "font-semibold text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.deed.deedType);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "font-semibold text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.deed.description);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "font-semibold text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.deed.deedDate);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "font-semibold text-left" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "px-2 py-1 bg-green-800 rounded-md max-w-sm text-white font-bold text-xs" }));
    (__VLS_ctx.translateStatus(__VLS_ctx.deed.deedStatus));
}
if (__VLS_ctx.authStore.isAdmin) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "px-4 pt-4 pb-2 border border-1 border-gray-200 mr-3" }));
    if (((_b = __VLS_ctx.deed) === null || _b === void 0 ? void 0 : _b.deedStatus) === __VLS_ctx.statusSteps[0] && __VLS_ctx.documents.length < 1) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    if ((((_c = __VLS_ctx.deed) === null || _c === void 0 ? void 0 : _c.deedStatus) === __VLS_ctx.statusSteps[0] || ((_d = __VLS_ctx.deed) === null || _d === void 0 ? void 0 : _d.deedStatus) === __VLS_ctx.statusSteps[4]) && __VLS_ctx.documents.length > 0) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-wrap items-center gap-3 mb-4" }));
        for (var _i = 0, _p = __VLS_getVForSourceType((__VLS_ctx.documents)); _i < _p.length; _i++) {
            var doc = _p[_i][0];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ key: (doc.id) }, { class: "flex items-center gap-2 px-4 py-2 rounded border border-gray-400" }), { disabled: true }));
            (doc.docType);
            if (doc.status === 'APPROVED') {
                var __VLS_8 = ((__VLS_ctx.CheckCircle));
                // @ts-ignore
                var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "text-green-900" })));
                var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "text-green-900" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
            }
            else if (doc.status === 'REJECTED') {
                var __VLS_12 = ((__VLS_ctx.XCircle));
                // @ts-ignore
                var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign({ class: "text-red-800" })));
                var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign({ class: "text-red-800" })], __VLS_functionalComponentArgsRest(__VLS_13), false));
            }
            else {
                var __VLS_16 = ((__VLS_ctx.FileText));
                // @ts-ignore
                var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
                var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_17), false));
            }
        }
        /** @type {[typeof SetDeedOnProgress, ]} */ ;
        // @ts-ignore
        var __VLS_20 = __VLS_asFunctionalComponent(SetDeedOnProgress, new SetDeedOnProgress(__assign({ 'onSaved': {} }, { deed: (__VLS_ctx.deed) })));
        var __VLS_21 = __VLS_20.apply(void 0, __spreadArray([__assign({ 'onSaved': {} }, { deed: (__VLS_ctx.deed) })], __VLS_functionalComponentArgsRest(__VLS_20), false));
        var __VLS_23 = void 0;
        var __VLS_24 = void 0;
        var __VLS_25 = void 0;
        var __VLS_26 = {
            onSaved: (__VLS_ctx.onProgresssSaved)
        };
        var __VLS_22;
    }
    else if (((_e = __VLS_ctx.deed) === null || _e === void 0 ? void 0 : _e.number) && ((_f = __VLS_ctx.deed) === null || _f === void 0 ? void 0 : _f.deedStatus) === __VLS_ctx.statusSteps[1]) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-wrap items-center gap-3 mb-4" }));
        for (var _q = 0, _r = __VLS_getVForSourceType((__VLS_ctx.statusSteps)); _q < _r.length; _q++) {
            var step = _r[_q][0];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign(__assign({ onClick: function () {
                    var _a, _b, _c, _d;
                    var _e = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _e[_i] = arguments[_i];
                    }
                    var $event = _e[0];
                    if (!(__VLS_ctx.authStore.isAdmin))
                        return;
                    if (!!((((_a = __VLS_ctx.deed) === null || _a === void 0 ? void 0 : _a.deedStatus) === __VLS_ctx.statusSteps[0] || ((_b = __VLS_ctx.deed) === null || _b === void 0 ? void 0 : _b.deedStatus) === __VLS_ctx.statusSteps[4]) && __VLS_ctx.documents.length > 0))
                        return;
                    if (!(((_c = __VLS_ctx.deed) === null || _c === void 0 ? void 0 : _c.number) && ((_d = __VLS_ctx.deed) === null || _d === void 0 ? void 0 : _d.deedStatus) === __VLS_ctx.statusSteps[1]))
                        return;
                    __VLS_ctx.selectStatus(__VLS_ctx.statusSteps[2]);
                } }, { key: (step) }), { class: ([
                    'px-4 py-2 rounded',
                    __VLS_ctx.deed.deedStatus === step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                ]) }), { disabled: true }));
            (__VLS_ctx.translateStatus(step));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)(__assign({ value: (__VLS_ctx.note), placeholder: "Catatan perubahan status" }, { class: "w-full border p-1 mb-2 rounded" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.submitStatus) }, { class: "bg-green-600 text-white px-4 py-2 rounded" }));
    }
    else if (((_g = __VLS_ctx.deed) === null || _g === void 0 ? void 0 : _g.number) && ((_h = __VLS_ctx.deed) === null || _h === void 0 ? void 0 : _h.deedStatus) === __VLS_ctx.statusSteps[2]) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex flex-wrap items-center gap-3 mb-4" }));
        for (var _s = 0, _t = __VLS_getVForSourceType((__VLS_ctx.statusSteps)); _s < _t.length; _s++) {
            var step = _t[_s][0];
            __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign(__assign({ onClick: function () {
                    var _a, _b, _c, _d, _e, _f;
                    var _g = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        _g[_i] = arguments[_i];
                    }
                    var $event = _g[0];
                    if (!(__VLS_ctx.authStore.isAdmin))
                        return;
                    if (!!((((_a = __VLS_ctx.deed) === null || _a === void 0 ? void 0 : _a.deedStatus) === __VLS_ctx.statusSteps[0] || ((_b = __VLS_ctx.deed) === null || _b === void 0 ? void 0 : _b.deedStatus) === __VLS_ctx.statusSteps[4]) && __VLS_ctx.documents.length > 0))
                        return;
                    if (!!(((_c = __VLS_ctx.deed) === null || _c === void 0 ? void 0 : _c.number) && ((_d = __VLS_ctx.deed) === null || _d === void 0 ? void 0 : _d.deedStatus) === __VLS_ctx.statusSteps[1]))
                        return;
                    if (!(((_e = __VLS_ctx.deed) === null || _e === void 0 ? void 0 : _e.number) && ((_f = __VLS_ctx.deed) === null || _f === void 0 ? void 0 : _f.deedStatus) === __VLS_ctx.statusSteps[2]))
                        return;
                    __VLS_ctx.selectStatus(__VLS_ctx.statusSteps[3]);
                } }, { key: (step) }), { class: ([
                    'px-4 py-2 rounded',
                    __VLS_ctx.deed.deedStatus === step ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                ]) }), { disabled: true }));
            (__VLS_ctx.translateStatus(step));
        }
        __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        __VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)(__assign({ value: (__VLS_ctx.note), placeholder: "Catatan perubahan status" }, { class: "w-full border p-1 mb-2 rounded" }));
        __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.submitStatus) }, { class: "bg-green-600 text-white px-4 py-2 rounded" }));
    }
    else if (((_j = __VLS_ctx.deed) === null || _j === void 0 ? void 0 : _j.number) && ((_k = __VLS_ctx.deed) === null || _k === void 0 ? void 0 : _k.deedStatus) === __VLS_ctx.statusSteps[3]) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    }
    else {
        /** @type {[typeof DeedNumber, ]} */ ;
        // @ts-ignore
        var __VLS_27 = __VLS_asFunctionalComponent(DeedNumber, new DeedNumber(__assign({ 'onSaved': {} }, { deed: (__VLS_ctx.deed) })));
        var __VLS_28 = __VLS_27.apply(void 0, __spreadArray([__assign({ 'onSaved': {} }, { deed: (__VLS_ctx.deed) })], __VLS_functionalComponentArgsRest(__VLS_27), false));
        var __VLS_30 = void 0;
        var __VLS_31 = void 0;
        var __VLS_32 = void 0;
        var __VLS_33 = {
            onSaved: (__VLS_ctx.onNumberSaved)
        };
        var __VLS_29;
    }
}
else {
    /** @type {[typeof DeedUserDocument, ]} */ ;
    // @ts-ignore
    var __VLS_34 = __VLS_asFunctionalComponent(DeedUserDocument, new DeedUserDocument({
        documents: ((_l = __VLS_ctx.deed) === null || _l === void 0 ? void 0 : _l.deedDocs),
    }));
    var __VLS_35 = __VLS_34.apply(void 0, __spreadArray([{
            documents: ((_m = __VLS_ctx.deed) === null || _m === void 0 ? void 0 : _m.deedDocs),
        }], __VLS_functionalComponentArgsRest(__VLS_34), false));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "pl-3 w-1/3" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "text-xl font-medium mb-2" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ol, __VLS_intrinsicElements.ol)(__assign({ class: "relative border-s border-gray-200 dark:border-gray-700" }));
for (var _u = 0, _v = __VLS_getVForSourceType(((_o = __VLS_ctx.deed) === null || _o === void 0 ? void 0 : _o.statusHistories)); _u < _v.length; _u++) {
    var _w = _v[_u], status_1 = _w[0], index = _w[1];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)(__assign({ key: (index) }, { class: "ms-6 pb-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(__assign({ class: "absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)(__assign({ class: "w-2.5 h-2.5 text-blue-800 dark:text-blue-300" }, { 'aria-hidden': "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 20 20" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
        d: "M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(__assign({ class: "mb-1 text-lg font-semibold text-gray-900 dark:text-white" }));
    (__VLS_ctx.translateStatus(status_1.status));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.time, __VLS_intrinsicElements.time)(__assign({ class: "block mb-2 text-sm font-bold leading-none text-gray-700 dark:text-gray-300" }));
    (new Date(status_1.updatedAt).toLocaleString());
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-base font-normal text-gray-500 dark:text-gray-400" }));
    (status_1.note);
}
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['w-10/12']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-400']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-500']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-6']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2/3']} */ ;
/** @type {__VLS_StyleScopedClasses['border-e-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-[auto_auto_1fr]']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-y-3']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-x-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-left']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['py-1']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-800']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-md']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xs']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-1']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-3']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-400']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-900']} */ ;
/** @type {__VLS_StyleScopedClasses['text-red-800']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-wrap']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-3']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/3']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['border-s']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:border-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-6']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-6']} */ ;
/** @type {__VLS_StyleScopedClasses['h-6']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-100']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['-start-3']} */ ;
/** @type {__VLS_StyleScopedClasses['ring-8']} */ ;
/** @type {__VLS_StyleScopedClasses['ring-white']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:ring-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:bg-blue-900']} */ ;
/** @type {__VLS_StyleScopedClasses['w-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-2.5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-blue-800']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-blue-300']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-900']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['font-normal']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-500']} */ ;
/** @type {__VLS_StyleScopedClasses['dark:text-gray-400']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            DeedNumber: DeedNumber,
            DeedUserDocument: DeedUserDocument,
            SetDeedOnProgress: SetDeedOnProgress,
            CheckCircle: CheckCircle,
            XCircle: XCircle,
            FileText: FileText,
            authStore: authStore,
            route: route,
            deed: deed,
            note: note,
            statusSteps: statusSteps,
            translateStatus: translateStatus,
            documents: documents,
            onNumberSaved: onNumberSaved,
            onProgresssSaved: onProgresssSaved,
            selectStatus: selectStatus,
            submitStatus: submitStatus,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */

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
import { ref, watch } from "vue";
import api from '@/libs/utils';
import { requiredDocumentsMap } from '@/libs/requiredDocuments';
var props = defineProps({
    deed: {
        type: Object,
        required: true
    }
});
var newDeed = ref();
watch(function () { return props === null || props === void 0 ? void 0 : props.deed; }, function (newVal) {
    if (newVal) {
        newDeed.value = newVal || null;
    }
}, { immediate: true });
var allDocumentsApproved = function (deed) {
    var requiredDocs = requiredDocumentsMap[deed.deedType] || [];
    var uploadedDocs = (deed === null || deed === void 0 ? void 0 : deed.deedDocs) || [];
    // Buat map dari dokumen yang udah di-upload (dengan status APPROVED)
    var approvedDocTypes = uploadedDocs
        .filter(function (doc) { return doc.status !== 'UPLOADED'; })
        .map(function (doc) { return doc.docType; });
    // Cek apakah semua required docs ada di approvedDocTypes
    return requiredDocs.every(function (requiredDoc) { return approvedDocTypes.includes(requiredDoc); });
};
var emit = defineEmits(['saved']);
var rejectDeed = function () { return __awaiter(void 0, void 0, void 0, function () {
    var deedRest, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.put("/deeds/".concat(props.deed.id, "/status"), {
                        status: 'REJECTED',
                        note: 'Ada dokumen yang salah'
                    }, { withCredentials: true })];
            case 1:
                deedRest = _a.sent();
                emit('saved', deedRest.data);
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                alert(" terjadi error " + e_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
var submitStatus = function () { return __awaiter(void 0, void 0, void 0, function () {
    var deedRest, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, api.put("/deeds/".concat(props.deed.id, "/status"), {
                        status: 'IN_PROGRESS',
                        note: 'Sedang diproses'
                    }, { withCredentials: true })];
            case 1:
                deedRest = _a.sent();
                emit('saved', deedRest.data);
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "w-full" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.rejectDeed) }, { class: "bg-red-600 text-white px-4 py-2 rounded mr-2" }));
if (__VLS_ctx.allDocumentsApproved(__VLS_ctx.deed)) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign({ onClick: (__VLS_ctx.submitStatus) }, { class: "bg-green-600 text-white px-4 py-2 rounded" }));
}
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-red-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mr-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-green-600']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            allDocumentsApproved: allDocumentsApproved,
            rejectDeed: rejectDeed,
            submitStatus: submitStatus,
        };
    },
    emits: {},
    props: {
        deed: {
            type: Object,
            required: true
        }
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
    emits: {},
    props: {
        deed: {
            type: Object,
            required: true
        }
    },
});
; /* PartiallyEnd: #4569/main.vue */

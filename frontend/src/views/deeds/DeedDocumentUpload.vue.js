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
import { ref, computed, watch, onMounted } from 'vue';
import api from '@/libs/utils';
import { requiredDocumentsMap } from '@/libs/requiredDocuments';
import { useRoute } from 'vue-router';
// const props = defineProps<{
//     show: boolean
//     deed: {
//         id: number,
//         deedType: string,
//         deedDocs: Array<{
//             docType: string,
//             status: string,
//             name: string,
//         }>
//     },
//     onClose: () => void
// }>()
var route = useRoute();
var deed = ref();
var uploadedDocs = ref(__spreadArray([], deed.deedDocs || [], true));
watch(function () { return deed; }, function (newDeed) {
    uploadedDocs.value = __spreadArray([], newDeed.deedDocs || [], true);
}, { immediate: true });
var requiredDocs = computed(function () {
    if (!deed || !deed.deedType)
        return [];
    var allRequired = requiredDocumentsMap[deed.deedType] || [];
    //const uploadedTypes = (props.deed as any).deedDocs?.map((doc: any) => doc.docType) || []
    var uploadedTypes = uploadedDocs.value
        .filter(function (doc) { return doc.status !== 'REJECTED'; })
        .map(function (doc) { return doc.docType; });
    // Kembalikan dokumen yang belum diunggah
    return allRequired.filter(function (doc) { return !uploadedTypes.includes(doc); });
});
var selectedFile = ref(null);
var selectedDocType = ref('');
var uploading = ref(false);
var documents = ref([]);
var handleFileChange = function (e) {
    var _a;
    var target = e.target;
    selectedFile.value = ((_a = target.files) === null || _a === void 0 ? void 0 : _a[0]) || null;
};
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
var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
    var formData, existingRejected, response, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!selectedFile.value || !selectedDocType.value)
                    return [2 /*return*/];
                uploading.value = true;
                formData = new FormData();
                formData.append('file', selectedFile.value);
                formData.append('docType', selectedDocType.value);
                existingRejected = uploadedDocs.value.find(function (doc) {
                    return doc.docType === selectedDocType.value && doc.status === 'REJECTED';
                });
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, 7, 8]);
                if (!existingRejected) return [3 /*break*/, 3];
                // Update dokumen yang sudah ada (REJECTED)
                return [4 /*yield*/, api.put("/deed-documents/".concat(existingRejected.id), formData, {
                        headers: { 'Content-Type': 'multipart/form-data' },
                    })
                    // Perbarui data di frontend
                ];
            case 2:
                // Update dokumen yang sudah ada (REJECTED)
                _a.sent();
                // Perbarui data di frontend
                existingRejected.status = 'UPLOADED'; // Atau status dari respons jika ada
                existingRejected.name = selectedFile.value.name;
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, api.post("/deeds/".concat(props.deed.id, "/upload"), formData, {
                    headers: { 'Content-Type': 'multipart/form-data' },
                })
                // Tambahkan dokumen baru ke daftar
            ];
            case 4:
                response = _a.sent();
                // Tambahkan dokumen baru ke daftar
                uploadedDocs.value.push({
                    id: response.data.id,
                    docType: selectedDocType.value,
                    status: response.data.status || 'UPLOADED',
                    name: selectedFile.value.name,
                });
                _a.label = 5;
            case 5:
                alert('Dokumen berhasil diunggah.');
                props.onClose();
                return [3 /*break*/, 8];
            case 6:
                error_1 = _a.sent();
                console.error('Gagal unggah dokumen:', error_1);
                alert('Gagal mengunggah dokumen.');
                return [3 /*break*/, 8];
            case 7:
                uploading.value = false;
                return [7 /*endfinally*/];
            case 8: return [2 /*return*/];
        }
    });
}); };
onMounted(fetchDetail);
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "max-w-3xl mx-auto bg-white rounded-xl shadow p-6 space-y-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-4" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "font-medium text-gray-700 mb-1" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)(__assign({ class: "list-disc pl-5 text-sm text-gray-600" }));
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.requiredDocs)); _i < _a.length; _i++) {
    var doc = _a[_i][0];
    __VLS_asFunctionalElement(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({
        key: (doc),
    });
    (doc);
}
if (__VLS_ctx.requiredDocs.length > 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)(__assign({ onSubmit: (__VLS_ctx.handleSubmit) }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: "block text-sm font-medium text-gray-700" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)(__assign({ value: (__VLS_ctx.selectedDocType) }, { class: "mt-1 block w-full border p-2 rounded" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
        disabled: true,
        value: "",
    });
    for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.requiredDocs)); _b < _c.length; _b++) {
        var doc = _c[_b][0];
        __VLS_asFunctionalElement(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({
            key: (doc),
            value: (doc),
        });
        (doc);
    }
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "mb-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)(__assign({ class: "block text-sm font-medium text-gray-700" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.input)(__assign(__assign({ onChange: (__VLS_ctx.handleFileChange) }, { type: "file" }), { class: "mt-1 block w-full border p-2 rounded" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ class: "flex justify-end gap-2 mt-6" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ onClick: (__VLS_ctx.onClose) }, { type: "button" }), { class: "px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(__assign(__assign({ type: "submit" }, { class: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded" }), { disabled: (!__VLS_ctx.selectedFile || !__VLS_ctx.selectedDocType || __VLS_ctx.uploading) }));
    if (__VLS_ctx.uploading) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(__assign({ class: "text-sm text-green-700 mt-4" }));
}
/** @type {__VLS_StyleScopedClasses['max-w-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['p-6']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-1']} */ ;
/** @type {__VLS_StyleScopedClasses['list-disc']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-1']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-200']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-300']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-700']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['py-2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-blue-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-blue-700']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-green-700']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            requiredDocs: requiredDocs,
            selectedFile: selectedFile,
            selectedDocType: selectedDocType,
            uploading: uploading,
            handleFileChange: handleFileChange,
            handleSubmit: handleSubmit,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */

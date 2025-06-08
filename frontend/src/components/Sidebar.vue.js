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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useRoute } from 'vue-router';
import { reactive, ref } from 'vue';
import * as icons from 'lucide-vue-next';
import { useAuthStore } from '../stores/authStore';
var authStore = useAuthStore();
var isSidebarExpanded = ref(true);
var menuItems = reactive([]);
if (authStore.isAdmin) {
    menuItems = [
        { icon: 'Home', label: 'Dashboard', path: '/' },
        { icon: 'User', label: 'Klien', path: '/clients' },
        { icon: 'Book', label: 'Akta', path: '/deeds' },
        { icon: 'Calendar', label: 'Jadwal', path: '/appointments' },
        { icon: 'Users', label: 'Pengguna', path: '/users' },
        { icon: 'Settings', label: 'Pengaturan', path: '/settings' },
    ];
}
else {
    menuItems = [
        { icon: 'Home', label: 'Dashboard', path: '/' },
        { icon: 'Book', label: 'Akta', path: '/deeds' },
        { icon: 'Calendar', label: 'Jadwal Saya', path: '/appointments/my-appointments' },
    ];
}
var route = useRoute();
var isActive = function (path) { return route.path.startsWith(path); };
var toggleSidebar = function () {
    isSidebarExpanded.value = !isSidebarExpanded.value;
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)(__assign({ class: "bg-white border-r h-screen  transition-all duration-300 ease-in-out" }, { class: ({ 'w-16': !__VLS_ctx.isSidebarExpanded, 'w-64': __VLS_ctx.isSidebarExpanded }) }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(__assign({ onClick: (__VLS_ctx.toggleSidebar) }, { class: "py-4 font-bold text-xl border-b cursor-pointer flex " }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.isSidebarExpanded) }), null, null);
var __VLS_0 = ((__VLS_ctx.icons['MenuIcon']));
// @ts-ignore
var __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0(__assign({ class: "w-8 h-8" })));
var __VLS_2 = __VLS_1.apply(void 0, __spreadArray([__assign({ class: "w-8 h-8" })], __VLS_functionalComponentArgsRest(__VLS_1), false));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (!__VLS_ctx.isSidebarExpanded) }), null, null);
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: "mt-4 flex flex-col gap-1 px-2" }));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (__VLS_ctx.isSidebarExpanded) }), null, null);
for (var _i = 0, _a = __VLS_getVForSourceType((__VLS_ctx.menuItems)); _i < _a.length; _i++) {
    var item = _a[_i][0];
    var __VLS_4 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4(__assign(__assign({ key: (item.path), to: (item.path) }, { class: "flex items-center gap-3 p-2 rounded hover:bg-gray-100" }), { class: ({ 'bg-gray-100 font-semibold': __VLS_ctx.isActive(item.path) }) })));
    var __VLS_6 = __VLS_5.apply(void 0, __spreadArray([__assign(__assign({ key: (item.path), to: (item.path) }, { class: "flex items-center gap-3 p-2 rounded hover:bg-gray-100" }), { class: ({ 'bg-gray-100 font-semibold': __VLS_ctx.isActive(item.path) }) })], __VLS_functionalComponentArgsRest(__VLS_5), false));
    __VLS_7.slots.default;
    var __VLS_8 = ((__VLS_ctx.icons[item.icon]));
    // @ts-ignore
    var __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8(__assign({ class: "w-5 h-5" })));
    var __VLS_10 = __VLS_9.apply(void 0, __spreadArray([__assign({ class: "w-5 h-5" })], __VLS_functionalComponentArgsRest(__VLS_9), false));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (item.label);
    var __VLS_7;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)(__assign({ class: "mt-4 flex flex-col items-center px-2" }));
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, __assign(__assign({}, __VLS_directiveBindingRestFields), { value: (!__VLS_ctx.isSidebarExpanded) }), null, null);
for (var _b = 0, _c = __VLS_getVForSourceType((__VLS_ctx.menuItems)); _b < _c.length; _b++) {
    var item = _c[_b][0];
    var __VLS_12 = {}.RouterLink;
    /** @type {[typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ]} */ ;
    // @ts-ignore
    var __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12(__assign(__assign({ key: (item.path), to: (item.path) }, { class: "p-2 rounded hover:bg-gray-100" }), { class: ({ 'bg-gray-100 font-semibold': __VLS_ctx.isActive(item.path) }) })));
    var __VLS_14 = __VLS_13.apply(void 0, __spreadArray([__assign(__assign({ key: (item.path), to: (item.path) }, { class: "p-2 rounded hover:bg-gray-100" }), { class: ({ 'bg-gray-100 font-semibold': __VLS_ctx.isActive(item.path) }) })], __VLS_functionalComponentArgsRest(__VLS_13), false));
    __VLS_15.slots.default;
    var __VLS_16 = ((__VLS_ctx.icons[item.icon]));
    // @ts-ignore
    var __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16(__assign({ class: "w-8 h-8" })));
    var __VLS_18 = __VLS_17.apply(void 0, __spreadArray([__assign({ class: "w-8 h-8" })], __VLS_functionalComponentArgsRest(__VLS_17), false));
    var __VLS_15;
}
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['border-r']} */ ;
/** @type {__VLS_StyleScopedClasses['h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['w-16']} */ ;
/** @type {__VLS_StyleScopedClasses['w-64']} */ ;
/** @type {__VLS_StyleScopedClasses['py-4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['w-5']} */ ;
/** @type {__VLS_StyleScopedClasses['h-5']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['px-2']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['w-8']} */ ;
/** @type {__VLS_StyleScopedClasses['h-8']} */ ;
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            icons: icons,
            isSidebarExpanded: isSidebarExpanded,
            menuItems: menuItems,
            isActive: isActive,
            toggleSidebar: toggleSidebar,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */

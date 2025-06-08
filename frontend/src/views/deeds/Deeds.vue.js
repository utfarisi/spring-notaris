var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useAuthStore } from '@/stores/authStore';
import UserDeeds from '@/components/UserDeeds.vue';
import AdminDeed from '@/components/AdminDeed.vue';
var authStore = useAuthStore();
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
var __VLS_ctx = {};
var __VLS_components;
var __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
if (__VLS_ctx.authStore.isAdmin) {
    /** @type {[typeof AdminDeed, ]} */ ;
    // @ts-ignore
    var __VLS_0 = __VLS_asFunctionalComponent(AdminDeed, new AdminDeed({}));
    var __VLS_1 = __VLS_0.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_0), false));
}
else {
    /** @type {[typeof UserDeeds, ]} */ ;
    // @ts-ignore
    var __VLS_3 = __VLS_asFunctionalComponent(UserDeeds, new UserDeeds({}));
    var __VLS_4 = __VLS_3.apply(void 0, __spreadArray([{}], __VLS_functionalComponentArgsRest(__VLS_3), false));
}
var __VLS_dollars;
var __VLS_self = (await import('vue')).defineComponent({
    setup: function () {
        return {
            UserDeeds: UserDeeds,
            AdminDeed: AdminDeed,
            authStore: authStore,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup: function () {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */

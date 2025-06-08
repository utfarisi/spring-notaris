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
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';
import Home from '../views/Home.vue';
import Register from '../views/Register.vue';
import { useAuthStore } from '../stores/authStore';
import AuthLayout from '@/layouts/AuthLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import DocumentUpload from '../views/DocumentUpload.vue';
import Client from '@/views/clients/Client.vue';
import Jadwal from '@/views/Jadwal.vue';
import Pengguna from '@/views/Pengguna.vue';
import Pengaturan from '@/views/Pengaturan.vue';
import Profile from '@/views/Profile.vue';
import Deeds from '@/views/deeds/Deeds.vue';
var routes = [
    {
        path: '/login',
        component: AuthLayout,
        children: [
            { path: '', name: 'Login', component: Login },
        ]
    },
    {
        path: '/register',
        component: AuthLayout,
        children: [
            { path: '', name: 'Register', component: Register },
        ]
    },
    {
        path: '/',
        component: MainLayout,
        meta: { authRequired: true },
        children: [
            { path: '', name: 'Home', component: Home },
            { path: 'documents', name: 'DocumentUpload', component: DocumentUpload },
            { path: 'clients', name: 'klien', component: Client, meta: { roles: ['ADMIN'] } },
            { path: 'clients/:id', name: 'clientEdit', component: function () { return import('@/views/clients/ClientEdit.vue'); } },
            { path: 'clients/:id/show', name: 'clientDetail', meta: { roles: ['ADMIN'] }, component: function () { return import('@/views/clients/ClientDetail.vue'); } },
            { path: 'operator/deeds/:id/review-documents', meta: { roles: ['ADMIN'] }, component: function () { return import('@/views/deeds/DeedDocumentReview.vue'); } },
            { path: 'users/deeds/:id/upload-documents', meta: { roles: ['USER'] }, component: function () { return import('@/views/deeds/DeedDocumentUpload.vue'); } },
            { path: 'deeds', name: 'akta', component: Deeds },
            { path: 'deeds/create', name: 'DeedCreate', component: function () { return import('@/views/deeds/DeedForm.vue'); } },
            { path: 'deeds/:id/edit', name: 'EditAktaForm', component: function () { return import('@/views/deeds/EditDeedForm.vue'); } },
            { path: 'deeds/:id', name: 'DeedDetail', component: function () { return import('@/views/deeds/DeedDetail.vue'); } },
            { path: 'appointments', name: 'appointments', meta: { roles: ['ADMIN'] }, component: function () { return import('@/views/appointments/Appointments.vue'); } },
            { path: 'appointments/create', name: 'appointmentCreate', meta: { roles: ['USER'] }, component: function () { return import('@/views/appointments/AppointmentCreate.vue'); } },
            { path: 'appointments/my-appointments', name: 'my-appointments', meta: { roles: ['USER'] }, component: function () { return import('@/views/appointments/MyAppointments.vue'); } },
            { path: 'schedule', name: 'jadwal', component: Jadwal },
            { path: 'users', name: 'pengguna', component: Pengguna },
            { path: 'settings', name: 'pengaturan', component: Pengaturan },
            { path: 'profile', name: 'profile', component: Profile }
        ]
    }
];
var router = createRouter({
    history: createWebHistory(),
    routes: routes,
});
// ⬇️ Tambahkan ini sebelum export
router.beforeEach(function (to, from, next) { return __awaiter(void 0, void 0, void 0, function () {
    var authStore, isAuthenticated, userRole;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                authStore = useAuthStore();
                if (!!authStore.user) return [3 /*break*/, 2];
                return [4 /*yield*/, authStore.initialize()];
            case 1:
                _b.sent();
                _b.label = 2;
            case 2:
                isAuthenticated = authStore.isAuthenticated;
                userRole = (_a = authStore.user) === null || _a === void 0 ? void 0 : _a.role;
                if (to.meta.authRequired && !isAuthenticated) {
                    return [2 /*return*/, next({ name: 'Login' })];
                }
                if (to.meta.roles && !to.meta.roles.includes(userRole)) {
                    return [2 /*return*/, next({ name: 'Home' })];
                }
                next();
                return [2 /*return*/];
        }
    });
}); });
export default router;

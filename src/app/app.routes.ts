import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ClientLayoutComponent } from './layouts/client-layout/client-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CreateComponent } from './pages/admin/products/create/create.component';
import { ListComponent } from './pages/admin/products/list/list.component';
import { GuardGuard } from './admin/guard.guard';

export const routes: Routes = [{
    path: '',
    component: ClientLayoutComponent,
    children: [
        {
            path: '',
            component: HomepageComponent
        },


        {
            path: 'product/:id',
            component: ProductDetailComponent
        }
    ]
},
{
    path: 'login',
    component: LoginComponent
},
{
    path: 'register',
    component: RegisterComponent
}, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
            path: 'admin/product',
            component: ListComponent,
            canActivate: [GuardGuard]
        },
        {
            path: 'admin/product/create',
            component: CreateComponent,
            canActivate: [GuardGuard]
        }
    ]

}
];

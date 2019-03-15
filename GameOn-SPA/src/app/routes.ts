import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';

// Router will try to match to any of the routes
export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    // Protects from being able to access this without being logged on
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            {path: 'members', component: MemberListComponent},
            {path: 'messages', component: MessagesComponent},
            {path: 'lists', component: ListsComponent},
        ]
    },

    // anything that doesnt match others will be redirected to home
    {path: '**', redirectTo: '', pathMatch: 'full'},
];

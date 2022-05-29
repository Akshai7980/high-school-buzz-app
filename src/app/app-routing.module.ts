import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'terms-and-condition',
    loadChildren: () => import('./terms-and-condition/terms-and-condition.module').then( m => m.TermsAndConditionPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'privacy-policy',
    loadChildren: () => import('./privacy-policy/privacy-policy.module').then( m => m.PrivacyPolicyPageModule)
  },
  {
    path: 'report-abuse',
    loadChildren: () => import('./report-abuse/report-abuse.module').then( m => m.ReportAbusePageModule)
  },
  {
    path: 'add-contest',
    loadChildren: () => import('./add-contest/add-contest.module').then( m => m.AddContestPageModule)
  },
  {
    path: 'facts-and-hacks',
    loadChildren: () => import('./facts-and-hacks/facts-and-hacks.module').then( m => m.FactsAndHacksPageModule)
  },
  {
    path: 'study-group',
    loadChildren: () => import('./study-group/study-group.module').then( m => m.StudyGroupPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'contest',
    loadChildren: () => import('./contest/contest.module').then( m => m.ContestPageModule)
  },
  {
    path: 'contest-view',
    loadChildren: () => import('./contest-view/contest-view.module').then( m => m.ContestViewPageModule)
  },
  {
    path: 'tell-me-a-secrete',
    loadChildren: () => import('./tell-me-a-secrete/tell-me-a-secrete.module').then( m => m.TellMeASecretePageModule)
  },
  {
    path: 'tell-me-a-secrete-view',
    loadChildren: () => import('./tell-me-a-secrete-view/tell-me-a-secrete-view.module').then( m => m.TellMeASecreteViewPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./contact-us/contact-us.module').then( m => m.ContactUsPageModule)
  },
  {
    path: 'facts-and-hacks-view',
    loadChildren: () => import('./facts-and-hacks-view/facts-and-hacks-view.module').then( m => m.FactsAndHacksViewPageModule)
  },
  {
    path: 'birthday-shout-out',
    loadChildren: () => import('./birthday-shout-out/birthday-shout-out.module').then( m => m.BirthdayShoutOutPageModule)
  },
  {
    path: 'study-group-list',
    loadChildren: () => import('./study-group-list/study-group-list.module').then( m => m.StudyGroupListPageModule)
  },
  {
    path: 'birthday-shout-out-default',
    loadChildren: () => import('./birthday-shout-out-default/birthday-shout-out-default.module').then( m => m.BirthdayShoutOutDefaultPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'birthday-wish-add',
    loadChildren: () => import('./birthday-wish-add/birthday-wish-add.module').then( m => m.BirthdayWishAddPageModule)
  },
  {
    path: 'visitors-home-view',
    loadChildren: () => import('./visitors-home-view/visitors-home-view.module').then( m => m.VisitorsHomeViewPageModule)
  },
  {
    path: 'birthday-detail',
    loadChildren: () => import('./birthday-detail/birthday-detail.module').then( m => m.BirthdayDetailPageModule)
  },
  {
    path: 'bulletin-board',
    loadChildren: () => import('./bulletin-board/bulletin-board.module').then( m => m.BulletinBoardPageModule)
  },
  {
    path: 'contest-detail',
    loadChildren: () => import('./contest-detail/contest-detail.module').then( m => m.ContestDetailPageModule)
  },
  {
    path: 'contest-expired',
    loadChildren: () => import('./contest-expired/contest-expired.module').then( m => m.ContestExpiredPageModule)
  },
  {
    path: 'learning-curve',
    loadChildren: () => import('./learning-curve/learning-curve.module').then( m => m.LearningCurvePageModule)
  },
  {
    path: 'study-group-chat',
    loadChildren: () => import('./study-group-chat/study-group-chat.module').then( m => m.StudyGroupChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationItemGroupComponent } from '../navigation-item-group/navigation-item-group.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,

    NavigationItemGroupComponent

  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  portalRoutes:any[] = [
    { 
      name: "reports", 
      children: [
        { name: "my reports", route: "/my-reports" },
        { name: "subordinate employee reports", route: "/subordinate-employee-reports" },
        { name: "team reports", route: "/team-reports" },
        { name: "project reports", route: "/project-reports" }
      ]
    },
    { 
      name: "tables", 
      children: [
        { name: "attendance table", route: "/attendance-table" },
        { name: "absence table", route: "/absence-table" },
        { name: "employee table", route: "/employee-table" },
        { name: "salary table", route: "/salary-table" }
      ]
    },
    { 
      name: "news", 
      children: [
        { name: "news", route: "/news" }
      ]
    },
    { 
      name: "articles", 
      children: [
        { name: "articles", route: "/articles" }
      ]
    },
    { 
      name: "trainings", 
      children: [
        { name: "video trainings", route: "/video-trainings" },
        { name: "article trainings", route: "/article-trainings" },
        { name: "interactive trainings", route: "/interactive-trainings" }
      ]
    },
    { 
      name: "career", 
      children: [
        { name: "job openings", route: "/job-openings" },
        { name: "internships", route: "/internships" },
        { name: "career development", route: "/career-development" }
      ]
    },
    { 
      name: "vacancies", 
      children: [
        { name: "current vacancies", route: "/current-vacancies" },
        { name: "upcoming vacancies", route: "/upcoming-vacancies" },
        { name: "closed vacancies", route: "/closed-vacancies" }
      ]
    },
    { 
      name: "gallery", 
      children: [
        { name: "photo gallery", route: "/photo-gallery" },
        { name: "video gallery", route: "/video-gallery" },
        { name: "event gallery", route: "/event-gallery" }
      ]
    },
    { 
      name: "dashboard", 
      children: [
        { name: "dashboard", route: "/dashboard" }
      ]
    },
    { 
      name: "profile", 
      children: [
        { name: "profile", route: "/profile" }
      ]
    },
    { 
      name: "settings", 
      children: [
        { name: "settings", route: "/settings" }
      ]
    },
    { 
      name: "support", 
      children: [
        { name: "support", route: "/support" }
      ]
    }
  ];
  

}

declare interface ITrackMyTimeWebPartStrings {
  PropertyPaneAbout: string;
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;

  description: string;
  
  // 0 - Context
  DefaultProjectListTitle: string; // DO NOT CHANGE THIS IN DIFFERENT LANGUAGES
  DefaultTrackMyTimeListTitle: string; // DO NOT CHANGE THIS IN DIFFERENT LANGUAGES

  // 1 - Analytics options
  analyticsWeb: string;
  analyticsList: string;
  minClickWeb: string;

  // 2 - Source and destination list information

  FieldLabel_ProjectListTitle: string;
  FieldLabel_ProjectListWeb: string;

  FieldLabel_TimeTrackListTitle: string;
  FieldLabel_TimeTrackListWeb: string;

  // 3 - General how accurate do you want this to be
  PropPaneGroupLabel_Accuracy: string;
  FieldLabel_RoundTime: string; //Up 5 minutes, Down 5 minutes, No Rounding;
  FieldLabel_ForceCurrentUser: string; //Up 5 minutes, Down 5 minutes, No Rounding;
  FieldLabel_ConfirmPrompt: string; //Up 5 minutes, Down 5 minutes, No Rounding;

  // 4 -Project options
  PropPaneGroupLabel_ProjectOptions: string;
  FieldLabel_AllowUserProjects: string; // Use to allow getting list of user write-in projects
  FieldLabel_ProjectMasterPriority: string; //Use to determine what projects float to top.... your most recent?  last day?
  FieldLabel_ProjectUserPriority: string; //Use to determine what projects float to top.... your most recent?  last day?

  // 5 - UI Defaults
  PropPaneGroupLabel_UIDefaults: string;
  FieldLabel_DefaultProjectPicker: string; // Recent, Your Projects, All Projects etc...
  FieldLabel_DefaultTimePicker: string; // SinceLast, Slider, Manual???
  FieldLabel_LocationChoices: string;  // Office, Customer, Traveling, Home
  FieldLabel_DefaultLocation: string; // 

  // 6 - User Feedback:
  PropPaneGroupLabel_UserFeedback: string;
  FieldLabel_ShowElapsedTimeSinceLast:  string; //Day, Week, Both?
  FieldLabel_ShowTargetBar:  string; //Day, Week, Both?
  FieldLabel_ShowTargetToggle:  string; //Day, Week, Both?
  FieldLabel_DailyTarget:  string; //
  FieldLabel_WeeklyTarget:  string; //

  // 7 - Slider Options
  PropPaneGroupLabel_SliderOptions: string; 
  FieldLabel_ShowTimeSlider: string; // "Show Time Slider",
  FieldLabel_TimeSliderInc: string; // "Incriment of time slider",
  FieldLabel_TimeSliderMax: string; // "Max of time slider",

  // 9 - Other web part options
  webPartScenario: string; //Choice used to create mutiple versions of the webpart.
  FieldLabel_ToggleTextOff: string;
  FieldLabel_ToggleTextOn: string;
  
  FieldLabel_PivSize: string;
  FieldLabel_PivFormat: string;
  FieldLabel_PivOptions: string;

}

declare module 'TrackMyTimeWebPartStrings' {
  const strings: ITrackMyTimeWebPartStrings;
  export = strings;
}

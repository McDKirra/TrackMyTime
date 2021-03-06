import {
  IPropertyPanePage,
  PropertyPaneLabel,
  IPropertyPaneLabelProps,
  PropertyPaneHorizontalRule,
  PropertyPaneTextField, IPropertyPaneTextFieldProps,
  PropertyPaneLink, IPropertyPaneLinkProps,
  PropertyPaneDropdown, IPropertyPaneDropdownProps,
  IPropertyPaneDropdownOption,PropertyPaneToggle
} from '@microsoft/sp-webpart-base';

import * as strings from 'TrackMyTimeWebPartStrings';
import { pivotOptionsGroup} from './index';


/*

  // 1 - Analytics options
  useListAnalytics: boolean;
  analyticsWeb?: string;
  analyticsList?: string;

  // 2 - Source and destination list information
  projectListTitle: string;
  projectListWeb: string;

  timeTrackListTitle: string;
  timeTrackListWeb: string;

  // 3 - General how accurate do you want this to be
  roundTime: string; //Up 5 minutes, Down 5 minutes, No Rounding;
  forceCurrentUser: boolean; //false allows you to put in data for someone else
  confirmPrompt: boolean;  //Make user press confirm

  // 4 -Project options
  allowUserProjects: boolean; //Will build list of ProjectsUser based on existing data from TrackMyTime list
  projectMasterPriority: string; //Use to determine what projects float to top.... your most recent?  last day?
  projectUserPriority: string; //Use to determine what projects float to top.... your most recent?  last day?

  // 5 - UI Defaults
  defaultProjectPicker: string; //Recent, Your Projects, All Projects etc...
  defaultTimePicker: string; //SinceLast, Slider, Manual???

  // 6 - User Feedback:
  showElapsedTimeSinceLast: boolean;  // Idea is that it can be like a clock showing how long it's been since your last entry.

  // Target will be used to provide user feedback on how much/well they are tracking time
  showTargetBar: boolean; //Eventually have some kind of way to tell user that x% of hours have been entered for day/week
  showTargetToggle: boolean; //Maybe give user option to toggle between day/week
  targetType:  string; //Day, Week, Both?
  targetValue: number; //Hours for typical day/week

  // 7 - Slider Options
  showTimeSlider: boolean; //true allows you to define end time and slider for how long you spent
  timeSliderInc: number; //incriment of time slider
  timeSliderMax: number; //max of time slider

  // 9 - Other web part options
  webPartScenario: string; //Choice used to create mutiple versions of the webpart.

  pivotSize: string;
  pivotFormat: string;
  pivotOptions: string;


    */

export class IntroPage {
  public getPropertyPanePage(webPartProps): IPropertyPanePage {
    return <IPropertyPanePage>
    { // <page1>
      header: {
        description: strings.PropertyPaneAbout
      },
      groups: [
        {
          groupFields: [
            PropertyPaneLabel('About Text', {
              text: 'This webpart gets helps track your time using SharePoint :).'
            }),

            PropertyPaneLink('About Link' , {
              text: 'Github Repo:  TrackMyTime',
              href: 'https://github.com/mikezimm/TrackMyTime/wiki',
            }),
          ]
        },

        // 2 - Source and destination list information    
        { groupName: 'Basic list info',
        groupFields: [
          PropertyPaneTextField('projectListWeb', {
              label: strings.FieldLabel_ProjectListWeb
          }),
          PropertyPaneTextField('projectListTitle', {
            label: strings.FieldLabel_ProjectListTitle
          }),
          PropertyPaneTextField('timeTrackListWeb', {
            label: strings.FieldLabel_TimeTrackListWeb
          }),
          PropertyPaneTextField('timeTrackListTitle', {
            label: strings.FieldLabel_TimeTrackListTitle
          }),
        ]}, // this group
/* */
        
        // 9 - Other web part options
        { groupName: 'Pivot Styles',
          groupFields: [
            PropertyPaneToggle('advancedPivotStyles', {
              label: '',
              offText: strings.FieldLabel_ToggleTextOff,
              onText: strings.FieldLabel_ToggleTextOn,
            }),
          ]}, // this group

        { isCollapsed: !webPartProps.advancedPivotStyles,
          groupFields: [
            PropertyPaneDropdown('pivotSize', <IPropertyPaneDropdownProps>{
              label: strings.FieldLabel_PivSize,
              options: pivotOptionsGroup.pivSizeChoices,
            }),
            PropertyPaneDropdown('pivotFormat', <IPropertyPaneDropdownProps>{
              label: strings.FieldLabel_PivFormat,
              options: pivotOptionsGroup.pivFormatChoices,
            }),
            PropertyPaneDropdown('pivotOptions', <IPropertyPaneDropdownProps>{
              label: strings.FieldLabel_PivOptions,
              options: pivotOptionsGroup.pivOptionsChoices,
              disabled: true,
            }),
          ]}, // this group

        ]}; // Groups
  } // getPropertyPanePage()
}

export let introPage = new IntroPage();
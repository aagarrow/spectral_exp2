/************************************* 
 * Pilot_Online_Study_Non_Instr *
 *************************************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'pilot_online_study_non_instr';  // from the Builder filename that created this script
let expInfo = {
    '': '',
};

// Start code blocks for 'Before Experiment'
// Silence the console
console.log = function () {};
console.warn = function () {};
console.error = function () {};
console.info = function () {};
console.debug = function () {};

////

var checkOK = setInterval(function() { //Use basic nested setInterval for Status check of dialog
    console.log("Check if DialogBox loaded");
   if (document.getElementById("progressMsg")) { //Wait for ProgressMsg to exist
        console.log("Dialogbox exists."); //Dialog Box Ready
      var statusText = document.getElementById("progressMsg").innerHTML; //get Status of ProgressMsg
      if(statusText == "all resources downloaded.") //If status is good. Go and let JS Click the button
      {
      console.log("All resources were downloaded! Press Ok now...");
      document.getElementById("dialogOK").click(); // Click on the checkbox
      clearInterval(checkOK);
      }
   }
}, 500); // check every 500ms

//Source: https://discourse.psychopy.org/t/is-there-a-way-to-skip-the-dialog-box-when-running-online/25625/2
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(init_paramsRoutineBegin());
flowScheduler.add(init_paramsRoutineEachFrame());
flowScheduler.add(init_paramsRoutineEnd());
flowScheduler.add(clockRoutineBegin());
flowScheduler.add(clockRoutineEachFrame());
flowScheduler.add(clockRoutineEnd());
flowScheduler.add(headphone_calibrateRoutineBegin());
flowScheduler.add(headphone_calibrateRoutineEachFrame());
flowScheduler.add(headphone_calibrateRoutineEnd());
flowScheduler.add(headphone_exampleRoutineBegin());
flowScheduler.add(headphone_exampleRoutineEachFrame());
flowScheduler.add(headphone_exampleRoutineEnd());
const trials_hugginsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_hugginsLoopBegin(trials_hugginsLoopScheduler));
flowScheduler.add(trials_hugginsLoopScheduler);
flowScheduler.add(trials_hugginsLoopEnd);





flowScheduler.add(volume_adjust_textRoutineBegin());
flowScheduler.add(volume_adjust_textRoutineEachFrame());
flowScheduler.add(volume_adjust_textRoutineEnd());
flowScheduler.add(volume_adjustRoutineBegin());
flowScheduler.add(volume_adjustRoutineEachFrame());
flowScheduler.add(volume_adjustRoutineEnd());
flowScheduler.add(welcome_screenRoutineBegin());
flowScheduler.add(welcome_screenRoutineEachFrame());
flowScheduler.add(welcome_screenRoutineEnd());
flowScheduler.add(pre_expRoutineBegin());
flowScheduler.add(pre_expRoutineEachFrame());
flowScheduler.add(pre_expRoutineEnd());
const trials_expAudioLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_expAudioLoopBegin(trials_expAudioLoopScheduler));
flowScheduler.add(trials_expAudioLoopScheduler);
flowScheduler.add(trials_expAudioLoopEnd);








flowScheduler.add(pre_testRoutineBegin());
flowScheduler.add(pre_testRoutineEachFrame());
flowScheduler.add(pre_testRoutineEnd());
const trials_testAudioLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_testAudioLoopBegin(trials_testAudioLoopScheduler));
flowScheduler.add(trials_testAudioLoopScheduler);
flowScheduler.add(trials_testAudioLoopEnd);










flowScheduler.add(send_expt_dataRoutineBegin());
flowScheduler.add(send_expt_dataRoutineEachFrame());
flowScheduler.add(send_expt_dataRoutineEnd());
flowScheduler.add(click_redirectRoutineBegin());
flowScheduler.add(click_redirectRoutineEachFrame());
flowScheduler.add(click_redirectRoutineEnd());
flowScheduler.add(end_scrapRoutineBegin());
flowScheduler.add(end_scrapRoutineEachFrame());
flowScheduler.add(end_scrapRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var init_paramsClock;
var paddedParticipantN;
var num_exp_melodies;
var num_test_melodies;
var clockClock;
var clock_countdownText;
var clock_displayText;
var button;
var headphone_calibrateClock;
var text_headphoneCalibrate;
var button_headphoneCalibratePlay;
var button_headphoneCalibrateCont;
var mouse_headphoneCalibrate;
var sound_headphoneCalibrate;
var text_headphoneCalibrate2;
var headphone_exampleClock;
var text_headphoneExample;
var sound_headphoneExample;
var button_headphoneExamplePlay;
var mouse_headphoneExample;
var button_headphoneExampleCont;
var text_headphoneExample2;
var headphone_checkClock;
var correct_file;
var huggins_trial_counter;
var sound_huggins;
var text_headphoneCheck;
var headphone_choiceClock;
var button_huggins_1;
var button_huggins_2;
var button_huggins_3;
var correct_huggins_trials;
var mouse_hugginsChoice;
var text_hugginsChoice;
var headphone_choice_resetClock;
var headphone_pass_checkClock;
var text_compFail;
var button_compFail;
var volume_adjust_textClock;
var text_volAdjustLong;
var button_nextPageVolAdjustText;
var mouse_nextPageVolAdjustText;
var volume_adjustClock;
var sound_highFreq;
var sound_lowFreq;
var mouse_nextPageVolAdjust;
var button_highFreq;
var button_lowFreq;
var button_continue;
var text_volAdjustShort;
var text_volAdjustShort2;
var welcome_screenClock;
var text_welcomeMessage;
var button_nextPageWelcome;
var delay_duration;
var clickTrigger;
var mouse_nextPageWelcome;
var pre_expClock;
var text_preExpMessage;
var button_nextPageExp;
var mouse_nextPageExp;
var next_melodyClock;
var button_nextMelody;
var text_nextMelody;
var mouse_nextMelody;
var play_audioClock;
var sound_playback;
var exp_clicks_file_loadingClock;
var used_click_numbers;
var curr_click_num;
var expTrialCounter;
var nthExpAttentionTrial;
var exp_attention_playbackClock;
var text_expAttentionPrompt;
var exp_attention_choiceClock;
var button_expAttention1;
var button_expAttention2;
var button_expAttention3;
var button_expAttention4;
var button_expAttention5;
var text_expBeepNumber;
var failed_attention_trials;
var mouse_expAttentionChoice;
var exp_attention_resetClock;
var attention_pass_checkClock;
var text_attentionFail;
var button_attentionFail;
var pre_testClock;
var text_preTestMessage;
var button_nextPageTest;
var mouse_nextPageTest;
var test_choiceClock;
var button_familiar;
var button_unfamiliar;
var text_testChoice;
var mouse_testChoice;
var choice_resetClock;
var test_clicks_file_loadingClock;
var testTrialCounter;
var nthTestAttentionTrial;
var test_attention_playbackClock;
var text_testAttentionPlayback;
var test_attention_choiceClock;
var button_attention_1;
var button_attention_2;
var button_attention_3;
var button_attention_4;
var button_attention_5;
var text_beepNumber;
var mouse_attentionChoice;
var test_attention_resetClock;
var send_expt_dataClock;
var click_redirectClock;
var text_dataWait;
var text_redirectPrompt;
var button_redirectClick;
var end_scrapClock;
var text_endScrap;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "init_params"
  init_paramsClock = new util.Clock();
  // Declare participantN and paddedParticipantN at the top level
  //let participantN = null;
  
  paddedParticipantN = null;
  
  const num_target_melodies = 140; // Total number of correct-grammar melodies (exposure + test)
  const num_foil_melodies = 40;
  num_exp_melodies = 100;
  const num_correct_melodies = (num_target_melodies - num_exp_melodies); // Target melodies
  num_test_melodies = num_correct_melodies + num_foil_melodies; // All test melodies (targets + foils)
  
  const GCS_SOUNDS_URL = "https://storage.googleapis.com/acw709_test_bucket_2/sounds/";
  const GCS_CONDITIONS_URL = "https://storage.googleapis.com/acw709_test_bucket_2/conditions/";
  
  async function fetchParticipantData() {
      try {
        // Step 1: Fetch participant number first
        const response = await fetch('https://script.google.com/macros/s/AKfycbzdR77Xgj-Klcig_hARCNIsbaCP6KlODFFfuhEYzoH4PrFEmqb_05RWT8gKsdbYAoTAIw/exec');
        const data = await response.json();
    
        const participantN = data.participantN;
        paddedParticipantN = participantN.toString().padStart(3, '0');
  //      const paddedParticipantN = '000'
  //      console.log(`Participant Number: ${paddedParticipantN}`);
    
        expInfo['participant'] = paddedParticipantN;
        let data_filename = `data/${expInfo['participant']}_${expName}_${expInfo['date']}`;
        psychoJS.experiment.dataFileName = data_filename;
  //      console.log(`Data filename set to: ${data_filename}`);
        
        // Define calibration file and push to resources
        const calibration_list = [
            "HugginsPitch_calibration.flac"
        ].map(file => `${GCS_SOUNDS_URL}${file}`);
        
        const calibration_resources = [
          ...calibration_list
        ];
  
        const calibration_stimuli = calibration_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(calibration_stimuli);
  
        // Do the same with the example file
        
        const example_list = [
            "HugginsPitch_example_2.flac"
        ].map(file => `${GCS_SOUNDS_URL}${file}`);
        
        const example_resources = [
          ...example_list
        ];
  
        const example_stimuli = example_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(example_stimuli);
  
        // Next, define the Huggins Pitch stimuli and push one set at a time
        const huggins_set1_list = [
            "HugginsPitch_set1_1.flac",
            "HugginsPitch_set1_2.flac",
            "HugginsPitch_set1_3.flac"
        ].map(file => `${GCS_SOUNDS_URL}${file}`);
        
        const huggins_set1_resources = [
          ...huggins_set1_list
        ];
  
        const huggins_set1_stimuli = huggins_set1_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(huggins_set1_stimuli);
        
        const huggins_set2_list = [
            "HugginsPitch_set2_1.flac",
            "HugginsPitch_set2_2.flac",
            "HugginsPitch_set2_3.flac"
        ].map(file => `${GCS_SOUNDS_URL}${file}`);
        
        const huggins_set2_resources = [
          ...huggins_set2_list
        ];
  
        const huggins_set2_stimuli = huggins_set2_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(huggins_set2_stimuli);
        
        const huggins_set3_list = [
            "HugginsPitch_set3_1.flac",
            "HugginsPitch_set3_2.flac",
            "HugginsPitch_set3_3.flac"
        ].map(file => `${GCS_SOUNDS_URL}${file}`);
        
        const huggins_set3_resources = [
          ...huggins_set3_list
        ];
  
        const huggins_set3_stimuli = huggins_set3_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(huggins_set3_stimuli);
        
        const huggins_set4_list = [
            "HugginsPitch_set4_1.flac",
            "HugginsPitch_set4_2.flac",
            "HugginsPitch_set4_3.flac"
        ].map(file => `${GCS_SOUNDS_URL}${file}`);
        
        const huggins_set4_resources = [
          ...huggins_set4_list
        ];
  
        const huggins_set4_stimuli = huggins_set4_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(huggins_set4_stimuli);
        
        const huggins_set5_list = [
            "HugginsPitch_set5_1.flac",
            "HugginsPitch_set5_2.flac",
            "HugginsPitch_set5_3.flac"
        ].map(file => `${GCS_SOUNDS_URL}${file}`);
        
        const huggins_set5_resources = [
          ...huggins_set5_list
        ];
  
        const huggins_set5_stimuli = huggins_set5_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(huggins_set5_stimuli);
        
        const huggins_set6_list = [
            "HugginsPitch_set6_1.flac",
            "HugginsPitch_set6_2.flac",
            "HugginsPitch_set6_3.flac"
        ].map(file => `${GCS_SOUNDS_URL}${file}`);
        
        const huggins_set6_resources = [
          ...huggins_set6_list
        ];
  
        const huggins_set6_stimuli = huggins_set6_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(huggins_set6_stimuli);
        
        // Push the conditions lists (exposure and test) for the participant next
        const conditions_list = [
            `${GCS_CONDITIONS_URL}exp_stims_${paddedParticipantN}.csv`,
            `${GCS_CONDITIONS_URL}test_stims_${paddedParticipantN}.csv`
        ];
  
        const exposure_melodies_list = Array.from({ length: num_exp_melodies }, (_, i) =>
            `${GCS_SOUNDS_URL}participant_${paddedParticipantN}_exposure_melody_${i.toString().padStart(3, '0')}.wav`
        );
  
        const test_melodies_list = Array.from({ length: num_correct_melodies }, (_, i) =>
            `${GCS_SOUNDS_URL}participant_${paddedParticipantN}_target_melody_${i.toString().padStart(3, '0')}.wav`
        ).concat(
            Array.from({ length: num_foil_melodies }, (_, i) =>
                `${GCS_SOUNDS_URL}participant_${paddedParticipantN}_foil_melody_${i.toString().padStart(3, '0')}.wav`
            )
        );
        
        const test_tones_list = [
            `${GCS_SOUNDS_URL}participant_${paddedParticipantN}_low_freq_vol_adj.wav`,
            `${GCS_SOUNDS_URL}participant_${paddedParticipantN}_high_freq_vol_adj.wav`
        ];
        
        const attention_tones_list = Array.from({ length: 5 }, (_, i) =>
            `${GCS_SOUNDS_URL}participant_${paddedParticipantN}_${i + 1}_clicks_audio.wav`
        );
        
        // Split into more granular list of exposure and test melodies (so they load in rough protocol order)
        const additional_resources = [
          ...test_tones_list,
          ...exposure_melodies_list,
          ...attention_tones_list,
          ...test_melodies_list
        ];
        
        const additional_stimuli = additional_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(additional_stimuli);
        
        const conditions_resources = [
          ...conditions_list
        ];
        
        const conditions_stimuli = conditions_resources.map(file => ({ name: file.split('/').pop(), path: file }));
  
        await psychoJS._serverManager.prepareResources(conditions_stimuli);
    
      } catch (error) {
        console.error('Error fetching participant number:', error);
      }
  }
  
  // Start the process
  fetchParticipantData();
  // Initialize components for Routine "clock"
  clockClock = new util.Clock();
  clock_countdownText = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock_countdownText',
    text: '',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  clock_displayText = new visual.TextStim({
    win: psychoJS.window,
    name: 'clock_displayText',
    text: 'Please wait a moment for the study to finish loading...',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: 'Continue',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -2
  });
  button.clock = new util.Clock();
  
  // Initialize components for Routine "headphone_calibrate"
  headphone_calibrateClock = new util.Clock();
  text_headphoneCalibrate = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_headphoneCalibrate',
    text: "Welcome to the study! Please now put on your headphones (or earphones).\n\nClick 'Play' to play a test sound to check your volume is working properly.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_headphoneCalibratePlay = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_headphoneCalibratePlay',
    text: 'Play',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -2
  });
  button_headphoneCalibratePlay.clock = new util.Clock();
  
  button_headphoneCalibrateCont = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_headphoneCalibrateCont',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -3
  });
  button_headphoneCalibrateCont.clock = new util.Clock();
  
  mouse_headphoneCalibrate = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_headphoneCalibrate.mouseClock = new util.Clock();
  sound_headphoneCalibrate = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_headphoneCalibrate.setVolume(1.0);
  text_headphoneCalibrate2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_headphoneCalibrate2',
    text: "Click 'Next' to move to the next page.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.2)], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "headphone_example"
  headphone_exampleClock = new util.Clock();
  text_headphoneExample = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_headphoneExample',
    text: "On the next few pages, you will hear a series of sounds. You will only hear each sound once, so please listen closely.\n\nEach sound contains three noises with silent gaps in-between. One of the noises has a faint beep hidden within.\n\nYour task is to decide which of the three noises contains the beep, and click on the correct button: 1, 2, or 3.\n\nClick 'Play' to hear an example. The beep is hidden inside the second noise, so the answer is 2. You can play the example as many times as you like.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  sound_headphoneExample = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_headphoneExample.setVolume(1.0);
  button_headphoneExamplePlay = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_headphoneExamplePlay',
    text: 'Play',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.12)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -2
  });
  button_headphoneExamplePlay.clock = new util.Clock();
  
  mouse_headphoneExample = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_headphoneExample.mouseClock = new util.Clock();
  button_headphoneExampleCont = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_headphoneExampleCont',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.35)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -4
  });
  button_headphoneExampleCont.clock = new util.Clock();
  
  text_headphoneExample2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_headphoneExample2',
    text: "Click 'Next' when you are ready to begin the test.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.25)], height: 0.035,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -6.0 
  });
  
  // Initialize components for Routine "headphone_check"
  headphone_checkClock = new util.Clock();
  correct_file = [];
  huggins_trial_counter = 0;
  sound_huggins = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_huggins.setVolume(1.0);
  text_headphoneCheck = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_headphoneCheck',
    text: 'Please listen carefully to the audio.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "headphone_choice"
  headphone_choiceClock = new util.Clock();
  button_huggins_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_huggins_1',
    text: '1',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.15), (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: 0
  });
  button_huggins_1.clock = new util.Clock();
  
  button_huggins_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_huggins_2',
    text: '2',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -1
  });
  button_huggins_2.clock = new util.Clock();
  
  button_huggins_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_huggins_3',
    text: '3',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.15, (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -2
  });
  button_huggins_3.clock = new util.Clock();
  
  correct_huggins_trials = 0;
  mouse_hugginsChoice = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_hugginsChoice.mouseClock = new util.Clock();
  text_hugginsChoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_hugginsChoice',
    text: 'Which of the three noises contained the beep?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  // Initialize components for Routine "headphone_choice_reset"
  headphone_choice_resetClock = new util.Clock();
  button_huggins_1.numClicks = 0;
  button_huggins_2.numClicks = 0;
  button_huggins_3.numClicks = 0;
  // Initialize components for Routine "headphone_pass_check"
  headphone_pass_checkClock = new util.Clock();
  text_compFail = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_compFail',
    text: 'Based on your responses, you are not eligible to continue with the remainder of the study. However, we appreciate your time and effort and you will be compensated for the time you have spent so far.\n\nPlease click the button below to be redirected to the Pavlovia study page and complete your submission.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button_compFail = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_compFail',
    text: 'Finish',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -2
  });
  button_compFail.clock = new util.Clock();
  
  // Initialize components for Routine "volume_adjust_text"
  volume_adjust_textClock = new util.Clock();
  text_volAdjustLong = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_volAdjustLong',
    text: "Thank you for completing the initial headphone checks.\n\nOn the next page, you will be given the opportunity to set the sound levels for the remainder of the study to a comfortable volume, using two example sounds (a low pitch and a high pitch). Please ensure you can hear both sounds clearly at your chosen volume.\n\nClick 'Next' when you are ready to proceed.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.08], height: 0.045,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_nextPageVolAdjustText = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_nextPageVolAdjustText',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.32)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -1
  });
  button_nextPageVolAdjustText.clock = new util.Clock();
  
  mouse_nextPageVolAdjustText = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_nextPageVolAdjustText.mouseClock = new util.Clock();
  // Initialize components for Routine "volume_adjust"
  volume_adjustClock = new util.Clock();
  sound_highFreq = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_highFreq.setVolume(1.0);
  sound_lowFreq = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_lowFreq.setVolume(1.0);
  mouse_nextPageVolAdjust = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_nextPageVolAdjust.mouseClock = new util.Clock();
  button_highFreq = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_highFreq',
    text: 'Play high pitch',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.35), 0.1],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -3
  });
  button_highFreq.clock = new util.Clock();
  
  button_lowFreq = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_lowFreq',
    text: 'Play low pitch',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.35, 0.1],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -4
  });
  button_lowFreq.clock = new util.Clock();
  
  button_continue = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_continue',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -5
  });
  button_continue.clock = new util.Clock();
  
  text_volAdjustShort = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_volAdjustShort',
    text: 'Adjust the volume on your device to a comfortable level, ensuring you can hear both sounds clearly.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_volAdjustShort2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_volAdjustShort2',
    text: "Click 'Next' when you have finished adjusting your volume.",
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.15)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  // Initialize components for Routine "welcome_screen"
  welcome_screenClock = new util.Clock();
  text_welcomeMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_welcomeMessage',
    text: "You will now experience two blocks of listening: In Block 1, you will simply click through the test and listen to each melody when it plays. In Block 2, you will listen to some new melodies and for each, you will choose an answer that best represents the new melody compared to the melodies in Block 1.\n\nIn both blocks, a small number of attention checks will be carried out in which you will hear a short audio clip containing 'beeps' and then be asked how many beeps were in the clip.\n\nPlease click 'Next' to proceed.",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.04,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_nextPageWelcome = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_nextPageWelcome',
    text: 'Next',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -1
  });
  button_nextPageWelcome.clock = new util.Clock();
  
  delay_duration = 0.1;
  psychoJS.experiment.addData('delay_duration', delay_duration);
  // Run 'Begin Experiment' code from code_nextPageWelcome
  clickTrigger = [];
  
  mouse_nextPageWelcome = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_nextPageWelcome.mouseClock = new util.Clock();
  // Initialize components for Routine "pre_exp"
  pre_expClock = new util.Clock();
  text_preExpMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_preExpMessage',
    text: 'Block 1 will begin when you click the button below. Please listen to all the melodies carefully.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_nextPageExp = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_nextPageExp',
    text: 'Begin Block 1',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -1
  });
  button_nextPageExp.clock = new util.Clock();
  
  mouse_nextPageExp = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_nextPageExp.mouseClock = new util.Clock();
  // Initialize components for Routine "next_melody"
  next_melodyClock = new util.Clock();
  button_nextMelody = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_nextMelody',
    text: 'Play',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.08)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: 0
  });
  button_nextMelody.clock = new util.Clock();
  
  text_nextMelody = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_nextMelody',
    text: 'Click the button to hear the next melody.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.08], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  mouse_nextMelody = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_nextMelody.mouseClock = new util.Clock();
  // Initialize components for Routine "play_audio"
  play_audioClock = new util.Clock();
  sound_playback = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_playback.setVolume(1.0);
  // Initialize components for Routine "exp_clicks_file_loading"
  exp_clicks_file_loadingClock = new util.Clock();
  used_click_numbers = [];
  curr_click_num = []; // To store the number of clicks for the next audio across routines
                       // (the value is changed with each new attention trial)
  expTrialCounter = 0;
  nthExpAttentionTrial = 25; // how many trials should happen before each attention trial
  // Initialize components for Routine "exp_attention_playback"
  exp_attention_playbackClock = new util.Clock();
  text_expAttentionPrompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_expAttentionPrompt',
    text: 'This is an attention check. Please listen carefully to the audio.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "exp_attention_choice"
  exp_attention_choiceClock = new util.Clock();
  button_expAttention1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_expAttention1',
    text: '1',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.3), (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: 0
  });
  button_expAttention1.clock = new util.Clock();
  
  button_expAttention2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_expAttention2',
    text: '2',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.15), (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -1
  });
  button_expAttention2.clock = new util.Clock();
  
  button_expAttention3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_expAttention3',
    text: '3',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -2
  });
  button_expAttention3.clock = new util.Clock();
  
  button_expAttention4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_expAttention4',
    text: '4',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.15, (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -3
  });
  button_expAttention4.clock = new util.Clock();
  
  button_expAttention5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_expAttention5',
    text: '5',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.3, (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -4
  });
  button_expAttention5.clock = new util.Clock();
  
  text_expBeepNumber = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_expBeepNumber',
    text: 'How many beeps did you hear in the audio clip?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  failed_attention_trials = 0;
  mouse_expAttentionChoice = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_expAttentionChoice.mouseClock = new util.Clock();
  // Initialize components for Routine "exp_attention_reset"
  exp_attention_resetClock = new util.Clock();
  button_expAttention1.numClicks = 0;
  button_expAttention2.numClicks = 0;
  button_expAttention3.numClicks = 0;
  button_expAttention4.numClicks = 0;
  button_expAttention5.numClicks = 0;
  // Initialize components for Routine "attention_pass_check"
  attention_pass_checkClock = new util.Clock();
  text_attentionFail = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_attentionFail',
    text: 'Based on your responses, you are not eligible to continue with the remainder of the study.\n\nPlease click the button below to be redirected to the Pavlovia study page and complete your submission.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button_attentionFail = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_attentionFail',
    text: 'Finish',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.2)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -2
  });
  button_attentionFail.clock = new util.Clock();
  
  // Initialize components for Routine "pre_test"
  pre_testClock = new util.Clock();
  text_preTestMessage = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_preTestMessage',
    text: 'You have now completed Block 1.\n\nBlock 2 will begin when you click the button below. Please listen to all the new melodies carefully and when answering each question, respond based on the melodic sequence you just heard compared to the sequences you heard in Block 1.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  button_nextPageTest = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_nextPageTest',
    text: 'Begin Block 2',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.3)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -1
  });
  button_nextPageTest.clock = new util.Clock();
  
  mouse_nextPageTest = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_nextPageTest.mouseClock = new util.Clock();
  // Initialize components for Routine "test_choice"
  test_choiceClock = new util.Clock();
  button_familiar = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_familiar',
    text: 'Familiar',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.3), (- 0.2)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: 0
  });
  button_familiar.clock = new util.Clock();
  
  button_unfamiliar = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_unfamiliar',
    text: 'Unfamiliar',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.3, (- 0.2)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -1
  });
  button_unfamiliar.clock = new util.Clock();
  
  text_testChoice = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_testChoice',
    text: 'Which option best describes the melody you just heard compared to the melodies in Block 1?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -2.0 
  });
  
  mouse_testChoice = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_testChoice.mouseClock = new util.Clock();
  // Initialize components for Routine "choice_reset"
  choice_resetClock = new util.Clock();
  button_familiar.numClicks = 0;
  button_unfamiliar.numClicks = 0;
  // Initialize components for Routine "test_clicks_file_loading"
  test_clicks_file_loadingClock = new util.Clock();
  testTrialCounter = 0;
  nthTestAttentionTrial = 20; // how many trials should happen before each attention trial
  // Initialize components for Routine "test_attention_playback"
  test_attention_playbackClock = new util.Clock();
  text_testAttentionPlayback = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_testAttentionPlayback',
    text: 'This is an attention check. Please listen carefully to the audio.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "test_attention_choice"
  test_attention_choiceClock = new util.Clock();
  button_attention_1 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_attention_1',
    text: '1',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.3), (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: 0
  });
  button_attention_1.clock = new util.Clock();
  
  button_attention_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_attention_2',
    text: '2',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [(- 0.15), (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -1
  });
  button_attention_2.clock = new util.Clock();
  
  button_attention_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_attention_3',
    text: '3',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -2
  });
  button_attention_3.clock = new util.Clock();
  
  button_attention_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_attention_4',
    text: '4',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.15, (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -3
  });
  button_attention_4.clock = new util.Clock();
  
  button_attention_5 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_attention_5',
    text: '5',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0.3, (- 0.1)],
    letterHeight: 0.05,
    size: [0.1, 0.2],
    depth: -4
  });
  button_attention_5.clock = new util.Clock();
  
  text_beepNumber = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_beepNumber',
    text: 'How many beeps did you hear in the audio clip?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.1], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -5.0 
  });
  
  mouse_attentionChoice = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_attentionChoice.mouseClock = new util.Clock();
  // Initialize components for Routine "test_attention_reset"
  test_attention_resetClock = new util.Clock();
  button_attention_1.numClicks = 0;
  button_attention_2.numClicks = 0;
  button_attention_3.numClicks = 0;
  button_attention_4.numClicks = 0;
  button_attention_5.numClicks = 0;
  // Initialize components for Routine "send_expt_data"
  send_expt_dataClock = new util.Clock();
  // Initialize components for Routine "click_redirect"
  click_redirectClock = new util.Clock();
  text_dataWait = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_dataWait',
    text: 'Sending data... Please wait.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  text_redirectPrompt = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_redirectPrompt',
    text: 'You have now completed the study. Thank you for participating!\n\nPlease click the button to be redirected to the Prolific study page to finish your submission.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  button_redirectClick = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_redirectClick',
    text: 'Click here',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, (- 0.15)],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -2
  });
  button_redirectClick.clock = new util.Clock();
  
  // Initialize components for Routine "end_scrap"
  end_scrapClock = new util.Clock();
  text_endScrap = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_endScrap',
    text: 'This is placeholder text (should not be visible to participants).',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var init_paramsComponents;
function init_paramsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'init_params' ---
    t = 0;
    init_paramsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('init_params.started', globalClock.getTime());
    // keep track of which components have finished
    init_paramsComponents = [];
    
    for (const thisComponent of init_paramsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function init_paramsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'init_params' ---
    // get current time
    t = init_paramsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of init_paramsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function init_paramsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'init_params' ---
    for (const thisComponent of init_paramsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('init_params.stopped', globalClock.getTime());
    // the Routine "init_params" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var clockComponents;
function clockRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'clock' ---
    t = 0;
    clockClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('clock.started', globalClock.getTime());
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    // keep track of which components have finished
    clockComponents = [];
    clockComponents.push(clock_countdownText);
    clockComponents.push(clock_displayText);
    clockComponents.push(button);
    
    for (const thisComponent of clockComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function clockRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'clock' ---
    // get current time
    t = clockClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    if (clock_countdownText.status === PsychoJS.Status.STARTED){ // only update if being drawn
      clock_countdownText.setText(Math.max(0, Math.round((10 - t))), false);
    }
    
    // *clock_countdownText* updates
    if (t >= 0.0 && clock_countdownText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock_countdownText.tStart = t;  // (not accounting for frame time here)
      clock_countdownText.frameNStart = frameN;  // exact frame index
      
      clock_countdownText.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock_countdownText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock_countdownText.setAutoDraw(false);
    }
    
    
    // *clock_displayText* updates
    if (t >= 0.0 && clock_displayText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      clock_displayText.tStart = t;  // (not accounting for frame time here)
      clock_displayText.frameNStart = frameN;  // exact frame index
      
      clock_displayText.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 10.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (clock_displayText.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      clock_displayText.setAutoDraw(false);
    }
    
    
    // *button* updates
    if (t >= 10 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of clockComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function clockRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'clock' ---
    for (const thisComponent of clockComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('clock.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    // the Routine "clock" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var playTrigger;
var startTime;
var routineStartTime;
var waitTime;
var continue_button_works;
var gotValidClick;
var headphone_calibrateComponents;
function headphone_calibrateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'headphone_calibrate' ---
    t = 0;
    headphone_calibrateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('headphone_calibrate.started', globalClock.getTime());
    clickTrigger = 0;
    playTrigger = 0;
    startTime = null;
    routineStartTime = t;
    waitTime = 1;
    
    button_headphoneCalibrateCont.setAutoDraw(false); // Ensure it's not visible
    button_headphoneCalibrateCont.enabled = false;   // Disable interactivity
    continue_button_works = false;
    // reset button_headphoneCalibratePlay to account for continued clicks & clear times on/off
    button_headphoneCalibratePlay.reset()
    // reset button_headphoneCalibrateCont to account for continued clicks & clear times on/off
    button_headphoneCalibrateCont.reset()
    // setup some python lists for storing info about the mouse_headphoneCalibrate
    // current position of the mouse:
    mouse_headphoneCalibrate.x = [];
    mouse_headphoneCalibrate.y = [];
    mouse_headphoneCalibrate.leftButton = [];
    mouse_headphoneCalibrate.midButton = [];
    mouse_headphoneCalibrate.rightButton = [];
    mouse_headphoneCalibrate.time = [];
    gotValidClick = false; // until a click is received
    sound_headphoneCalibrate.setValue('HugginsPitch_calibration.flac');
    sound_headphoneCalibrate.setVolume(1.0);
    // keep track of which components have finished
    headphone_calibrateComponents = [];
    headphone_calibrateComponents.push(text_headphoneCalibrate);
    headphone_calibrateComponents.push(button_headphoneCalibratePlay);
    headphone_calibrateComponents.push(button_headphoneCalibrateCont);
    headphone_calibrateComponents.push(mouse_headphoneCalibrate);
    headphone_calibrateComponents.push(sound_headphoneCalibrate);
    headphone_calibrateComponents.push(text_headphoneCalibrate2);
    
    for (const thisComponent of headphone_calibrateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var pressingTimeA;
var pressingTimeB;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function headphone_calibrateRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'headphone_calibrate' ---
    // get current time
    t = headphone_calibrateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_headphoneCalibrate* updates
    if (t >= 0.0 && text_headphoneCalibrate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_headphoneCalibrate.tStart = t;  // (not accounting for frame time here)
      text_headphoneCalibrate.frameNStart = frameN;  // exact frame index
      
      text_headphoneCalibrate.setAutoDraw(true);
    }
    
    if ((t - routineStartTime) > waitTime) {
    
        // Check for left mouse press within button area
        if (mouse_headphoneCalibrate.isPressedIn(button_headphoneCalibratePlay) && playTrigger === 0 && mouse_headphoneCalibrate.getPressed()[0]) {
            playTrigger = 1; // state when mouse is pressed and held on button
            pressingTimeA = t;
        }
    
        if (playTrigger === 1 && !button_headphoneCalibratePlay.contains(mouse_headphoneCalibrate)) {
            playTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    
        if (mouse_headphoneCalibrate.getPressed()[0] && !button_headphoneCalibratePlay.contains(mouse_headphoneCalibrate)) {
            if (((t - startTime) < sound_headphoneCalibrate.getDuration()) && startTime !== null) {
                playTrigger = 3;
            } else {
                playTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
            }
        }
    
        if (playTrigger === 2 && !mouse_headphoneCalibrate.getPressed()[0]) {
            playTrigger = 0; // resets mouse so new click required to press button
        }
    
        if (!mouse_headphoneCalibrate.isPressedIn(button_headphoneCalibratePlay) && button_headphoneCalibratePlay.contains(mouse_headphoneCalibrate) && t > pressingTimeA && playTrigger === 1) {
            if (sound_headphoneCalibrate.status !== PsychoJS.Status.STARTED) {
                playTrigger = 3;
                sound_headphoneCalibrate.play(); // Start playing the sound
                startTime = t
            }
        }
    
        // Check the status of the sound in each frame
        if (playTrigger === 3 && (t - startTime) >= sound_headphoneCalibrate.getDuration()) {
            playTrigger = 0; // resets playTrigger after sound has finished playing
            sound_headphoneCalibrate.stop();
            pressingTimeA = null;
            if (!button_headphoneCalibrateCont.enabled) {
                button_headphoneCalibrateCont.setAutoDraw(true); // Show the button
                button_headphoneCalibrateCont.enabled = true;   // Enable interactivity
                text_headphoneCalibrate2.setAutoDraw(true);
                continue_button_works = true;
                mouse_headphoneCalibrate.clickReset(); // Prevents clicks on hidden button being registered
            }
        }
    
        // Check for left mouse press within button area
        if (mouse_headphoneCalibrate.isPressedIn(button_headphoneCalibrateCont) && clickTrigger === 0 && mouse_headphoneCalibrate.getPressed()[0]) {
            clickTrigger = 1; // state when mouse is pressed and held on button
            pressingTimeB = t;
        }
    
        if (clickTrigger === 1 && !button_headphoneCalibrateCont.contains(mouse_headphoneCalibrate)) {
            clickTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    
        if (mouse_headphoneCalibrate.getPressed()[0] && !button_headphoneCalibrateCont.contains(mouse_headphoneCalibrate)) {
            clickTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
        }
    
        if (clickTrigger === 2 && !mouse_headphoneCalibrate.getPressed()[0]) {
            clickTrigger = 0; // resets mouse so new click required to press button
            pressingTimeB = null;
        }
    
        if (!mouse_headphoneCalibrate.isPressedIn(button_headphoneCalibrateCont) && button_headphoneCalibrateCont.contains(mouse_headphoneCalibrate) && t > pressingTimeB && clickTrigger === 1) {
            clickTrigger = 3; // state when button is pressed and released without moving off button
        }
    
        if (clickTrigger === 3 && continue_button_works) {
            continueRoutine = false; // completes routine
        }
    }
    
    // *button_headphoneCalibratePlay* updates
    if (t >= 0 && button_headphoneCalibratePlay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_headphoneCalibratePlay.tStart = t;  // (not accounting for frame time here)
      button_headphoneCalibratePlay.frameNStart = frameN;  // exact frame index
      
      button_headphoneCalibratePlay.setAutoDraw(true);
    }
    
    if (button_headphoneCalibratePlay.status === PsychoJS.Status.STARTED) {
      // check whether button_headphoneCalibratePlay has been pressed
      if (button_headphoneCalibratePlay.isClicked) {
        if (!button_headphoneCalibratePlay.wasClicked) {
          // store time of first click
          button_headphoneCalibratePlay.timesOn.push(button_headphoneCalibratePlay.clock.getTime());
          // store time clicked until
          button_headphoneCalibratePlay.timesOff.push(button_headphoneCalibratePlay.clock.getTime());
        } else {
          // update time clicked until;
          button_headphoneCalibratePlay.timesOff[button_headphoneCalibratePlay.timesOff.length - 1] = button_headphoneCalibratePlay.clock.getTime();
        }
        if (!button_headphoneCalibratePlay.wasClicked) {
          
        }
        // if button_headphoneCalibratePlay is still clicked next frame, it is not a new click
        button_headphoneCalibratePlay.wasClicked = true;
      } else {
        // if button_headphoneCalibratePlay is clicked next frame, it is a new click
        button_headphoneCalibratePlay.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_headphoneCalibratePlay hasn't started / has finished
      button_headphoneCalibratePlay.clock.reset();
      // if button_headphoneCalibratePlay is clicked next frame, it is a new click
      button_headphoneCalibratePlay.wasClicked = false;
    }
    
    // *button_headphoneCalibrateCont* updates
    if (t >= 99999 && button_headphoneCalibrateCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_headphoneCalibrateCont.tStart = t;  // (not accounting for frame time here)
      button_headphoneCalibrateCont.frameNStart = frameN;  // exact frame index
      
      button_headphoneCalibrateCont.setAutoDraw(true);
    }
    
    if (button_headphoneCalibrateCont.status === PsychoJS.Status.STARTED) {
      // check whether button_headphoneCalibrateCont has been pressed
      if (button_headphoneCalibrateCont.isClicked) {
        if (!button_headphoneCalibrateCont.wasClicked) {
          // store time of first click
          button_headphoneCalibrateCont.timesOn.push(button_headphoneCalibrateCont.clock.getTime());
          // store time clicked until
          button_headphoneCalibrateCont.timesOff.push(button_headphoneCalibrateCont.clock.getTime());
        } else {
          // update time clicked until;
          button_headphoneCalibrateCont.timesOff[button_headphoneCalibrateCont.timesOff.length - 1] = button_headphoneCalibrateCont.clock.getTime();
        }
        if (!button_headphoneCalibrateCont.wasClicked) {
          
        }
        // if button_headphoneCalibrateCont is still clicked next frame, it is not a new click
        button_headphoneCalibrateCont.wasClicked = true;
      } else {
        // if button_headphoneCalibrateCont is clicked next frame, it is a new click
        button_headphoneCalibrateCont.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_headphoneCalibrateCont hasn't started / has finished
      button_headphoneCalibrateCont.clock.reset();
      // if button_headphoneCalibrateCont is clicked next frame, it is a new click
      button_headphoneCalibrateCont.wasClicked = false;
    }
    // *mouse_headphoneCalibrate* updates
    if (t >= 0.0 && mouse_headphoneCalibrate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_headphoneCalibrate.tStart = t;  // (not accounting for frame time here)
      mouse_headphoneCalibrate.frameNStart = frameN;  // exact frame index
      
      mouse_headphoneCalibrate.status = PsychoJS.Status.STARTED;
      mouse_headphoneCalibrate.mouseClock.reset();
      prevButtonState = mouse_headphoneCalibrate.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_headphoneCalibrate.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_headphoneCalibrate.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_headphoneCalibrate.getPos();
          mouse_headphoneCalibrate.x.push(_mouseXYs[0]);
          mouse_headphoneCalibrate.y.push(_mouseXYs[1]);
          mouse_headphoneCalibrate.leftButton.push(_mouseButtons[0]);
          mouse_headphoneCalibrate.midButton.push(_mouseButtons[1]);
          mouse_headphoneCalibrate.rightButton.push(_mouseButtons[2]);
          mouse_headphoneCalibrate.time.push(mouse_headphoneCalibrate.mouseClock.getTime());
        }
      }
    }
    // start/stop sound_headphoneCalibrate
    if (t >= 99999 && sound_headphoneCalibrate.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_headphoneCalibrate.tStart = t;  // (not accounting for frame time here)
      sound_headphoneCalibrate.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_headphoneCalibrate.play(); });  // screen flip
      sound_headphoneCalibrate.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_headphoneCalibrate.getDuration() + sound_headphoneCalibrate.tStart)     && sound_headphoneCalibrate.status === PsychoJS.Status.STARTED) {
      sound_headphoneCalibrate.stop();  // stop the sound (if longer than duration)
      sound_headphoneCalibrate.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_headphoneCalibrate2* updates
    if (t >= 99999 && text_headphoneCalibrate2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_headphoneCalibrate2.tStart = t;  // (not accounting for frame time here)
      text_headphoneCalibrate2.frameNStart = frameN;  // exact frame index
      
      text_headphoneCalibrate2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of headphone_calibrateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function headphone_calibrateRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'headphone_calibrate' ---
    for (const thisComponent of headphone_calibrateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('headphone_calibrate.stopped', globalClock.getTime());
    clickTrigger = 0;
    playTrigger = 0;
    startTime = null;
    pressingTimeA = null;
    pressingTimeB = null;
    psychoJS.experiment.addData('button_headphoneCalibratePlay.numClicks', button_headphoneCalibratePlay.numClicks);
    psychoJS.experiment.addData('button_headphoneCalibratePlay.timesOn', button_headphoneCalibratePlay.timesOn);
    psychoJS.experiment.addData('button_headphoneCalibratePlay.timesOff', button_headphoneCalibratePlay.timesOff);
    psychoJS.experiment.addData('button_headphoneCalibrateCont.numClicks', button_headphoneCalibrateCont.numClicks);
    psychoJS.experiment.addData('button_headphoneCalibrateCont.timesOn', button_headphoneCalibrateCont.timesOn);
    psychoJS.experiment.addData('button_headphoneCalibrateCont.timesOff', button_headphoneCalibrateCont.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_headphoneCalibrate.x', mouse_headphoneCalibrate.x);
    psychoJS.experiment.addData('mouse_headphoneCalibrate.y', mouse_headphoneCalibrate.y);
    psychoJS.experiment.addData('mouse_headphoneCalibrate.leftButton', mouse_headphoneCalibrate.leftButton);
    psychoJS.experiment.addData('mouse_headphoneCalibrate.midButton', mouse_headphoneCalibrate.midButton);
    psychoJS.experiment.addData('mouse_headphoneCalibrate.rightButton', mouse_headphoneCalibrate.rightButton);
    psychoJS.experiment.addData('mouse_headphoneCalibrate.time', mouse_headphoneCalibrate.time);
    
    sound_headphoneCalibrate.stop();  // ensure sound has stopped at end of Routine
    // the Routine "headphone_calibrate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var headphone_exampleComponents;
function headphone_exampleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'headphone_example' ---
    t = 0;
    headphone_exampleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('headphone_example.started', globalClock.getTime());
    sound_headphoneExample.setValue('HugginsPitch_example_2.flac');
    sound_headphoneExample.setVolume(1.0);
    // reset button_headphoneExamplePlay to account for continued clicks & clear times on/off
    button_headphoneExamplePlay.reset()
    // setup some python lists for storing info about the mouse_headphoneExample
    // current position of the mouse:
    mouse_headphoneExample.x = [];
    mouse_headphoneExample.y = [];
    mouse_headphoneExample.leftButton = [];
    mouse_headphoneExample.midButton = [];
    mouse_headphoneExample.rightButton = [];
    mouse_headphoneExample.time = [];
    gotValidClick = false; // until a click is received
    // reset button_headphoneExampleCont to account for continued clicks & clear times on/off
    button_headphoneExampleCont.reset()
    clickTrigger = 0;
    playTrigger = 0;
    startTime = null;
    routineStartTime = t;
    waitTime = 3;
    
    button_headphoneExampleCont.setAutoDraw(false); // Ensure it's not visible
    button_headphoneExampleCont.enabled = false;   // Disable interactivity
    continue_button_works = false;
    // keep track of which components have finished
    headphone_exampleComponents = [];
    headphone_exampleComponents.push(text_headphoneExample);
    headphone_exampleComponents.push(sound_headphoneExample);
    headphone_exampleComponents.push(button_headphoneExamplePlay);
    headphone_exampleComponents.push(mouse_headphoneExample);
    headphone_exampleComponents.push(button_headphoneExampleCont);
    headphone_exampleComponents.push(text_headphoneExample2);
    
    for (const thisComponent of headphone_exampleComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function headphone_exampleRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'headphone_example' ---
    // get current time
    t = headphone_exampleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_headphoneExample* updates
    if (t >= 0.0 && text_headphoneExample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_headphoneExample.tStart = t;  // (not accounting for frame time here)
      text_headphoneExample.frameNStart = frameN;  // exact frame index
      
      text_headphoneExample.setAutoDraw(true);
    }
    
    // start/stop sound_headphoneExample
    if (t >= 99999 && sound_headphoneExample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_headphoneExample.tStart = t;  // (not accounting for frame time here)
      sound_headphoneExample.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_headphoneExample.play(); });  // screen flip
      sound_headphoneExample.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_headphoneExample.getDuration() + sound_headphoneExample.tStart)     && sound_headphoneExample.status === PsychoJS.Status.STARTED) {
      sound_headphoneExample.stop();  // stop the sound (if longer than duration)
      sound_headphoneExample.status = PsychoJS.Status.FINISHED;
    }
    
    // *button_headphoneExamplePlay* updates
    if (t >= 0 && button_headphoneExamplePlay.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_headphoneExamplePlay.tStart = t;  // (not accounting for frame time here)
      button_headphoneExamplePlay.frameNStart = frameN;  // exact frame index
      
      button_headphoneExamplePlay.setAutoDraw(true);
    }
    
    if (button_headphoneExamplePlay.status === PsychoJS.Status.STARTED) {
      // check whether button_headphoneExamplePlay has been pressed
      if (button_headphoneExamplePlay.isClicked) {
        if (!button_headphoneExamplePlay.wasClicked) {
          // store time of first click
          button_headphoneExamplePlay.timesOn.push(button_headphoneExamplePlay.clock.getTime());
          // store time clicked until
          button_headphoneExamplePlay.timesOff.push(button_headphoneExamplePlay.clock.getTime());
        } else {
          // update time clicked until;
          button_headphoneExamplePlay.timesOff[button_headphoneExamplePlay.timesOff.length - 1] = button_headphoneExamplePlay.clock.getTime();
        }
        if (!button_headphoneExamplePlay.wasClicked) {
          
        }
        // if button_headphoneExamplePlay is still clicked next frame, it is not a new click
        button_headphoneExamplePlay.wasClicked = true;
      } else {
        // if button_headphoneExamplePlay is clicked next frame, it is a new click
        button_headphoneExamplePlay.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_headphoneExamplePlay hasn't started / has finished
      button_headphoneExamplePlay.clock.reset();
      // if button_headphoneExamplePlay is clicked next frame, it is a new click
      button_headphoneExamplePlay.wasClicked = false;
    }
    // *mouse_headphoneExample* updates
    if (t >= 0.0 && mouse_headphoneExample.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_headphoneExample.tStart = t;  // (not accounting for frame time here)
      mouse_headphoneExample.frameNStart = frameN;  // exact frame index
      
      mouse_headphoneExample.status = PsychoJS.Status.STARTED;
      mouse_headphoneExample.mouseClock.reset();
      prevButtonState = mouse_headphoneExample.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_headphoneExample.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_headphoneExample.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_headphoneExample.getPos();
          mouse_headphoneExample.x.push(_mouseXYs[0]);
          mouse_headphoneExample.y.push(_mouseXYs[1]);
          mouse_headphoneExample.leftButton.push(_mouseButtons[0]);
          mouse_headphoneExample.midButton.push(_mouseButtons[1]);
          mouse_headphoneExample.rightButton.push(_mouseButtons[2]);
          mouse_headphoneExample.time.push(mouse_headphoneExample.mouseClock.getTime());
        }
      }
    }
    
    // *button_headphoneExampleCont* updates
    if (t >= 99999 && button_headphoneExampleCont.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_headphoneExampleCont.tStart = t;  // (not accounting for frame time here)
      button_headphoneExampleCont.frameNStart = frameN;  // exact frame index
      
      button_headphoneExampleCont.setAutoDraw(true);
    }
    
    if (button_headphoneExampleCont.status === PsychoJS.Status.STARTED) {
      // check whether button_headphoneExampleCont has been pressed
      if (button_headphoneExampleCont.isClicked) {
        if (!button_headphoneExampleCont.wasClicked) {
          // store time of first click
          button_headphoneExampleCont.timesOn.push(button_headphoneExampleCont.clock.getTime());
          // store time clicked until
          button_headphoneExampleCont.timesOff.push(button_headphoneExampleCont.clock.getTime());
        } else {
          // update time clicked until;
          button_headphoneExampleCont.timesOff[button_headphoneExampleCont.timesOff.length - 1] = button_headphoneExampleCont.clock.getTime();
        }
        if (!button_headphoneExampleCont.wasClicked) {
          
        }
        // if button_headphoneExampleCont is still clicked next frame, it is not a new click
        button_headphoneExampleCont.wasClicked = true;
      } else {
        // if button_headphoneExampleCont is clicked next frame, it is a new click
        button_headphoneExampleCont.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_headphoneExampleCont hasn't started / has finished
      button_headphoneExampleCont.clock.reset();
      // if button_headphoneExampleCont is clicked next frame, it is a new click
      button_headphoneExampleCont.wasClicked = false;
    }
    if ((t - routineStartTime) > waitTime) {
    
        // Check for left mouse press within button area
        if (mouse_headphoneExample.isPressedIn(button_headphoneExamplePlay) && playTrigger === 0 && mouse_headphoneExample.getPressed()[0]) {
            playTrigger = 1; // state when mouse is pressed and held on button
            pressingTimeA = t;
        }
    
        if (playTrigger === 1 && !button_headphoneExamplePlay.contains(mouse_headphoneExample)) {
            playTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    
        if (mouse_headphoneExample.getPressed()[0] && !button_headphoneExamplePlay.contains(mouse_headphoneExample)) {
            if (((t - startTime) < sound_headphoneExample.getDuration()) && startTime !== null) {
                playTrigger = 3;
            } else {
                playTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
            }
        }
    
        if (playTrigger === 2 && !mouse_headphoneExample.getPressed()[0]) {
            playTrigger = 0; // resets mouse so new click required to press button
        }
    
        if (!mouse_headphoneExample.isPressedIn(button_headphoneExamplePlay) && button_headphoneExamplePlay.contains(mouse_headphoneExample) && t > pressingTimeA && playTrigger === 1) {
            if (sound_headphoneExample.status !== PsychoJS.Status.STARTED) {
                playTrigger = 3;
                sound_headphoneExample.play(); // Start playing the sound
                startTime = t
            }
        }
    
        // Check the status of the sound in each frame
        if (playTrigger === 3 && (t - startTime) >= sound_headphoneExample.getDuration()) {
            playTrigger = 0; // resets playTrigger after sound has finished playing
            sound_headphoneExample.stop();
            pressingTimeA = null;
            if (!button_headphoneExampleCont.enabled) {
                button_headphoneExampleCont.setAutoDraw(true); // Show the button
                button_headphoneExampleCont.enabled = true;   // Enable interactivity
                text_headphoneExample2.setAutoDraw(true);
                continue_button_works = true;
                mouse_headphoneExample.clickReset(); // Prevents clicks on hidden button being registered
            }
        }
    
        // Check for left mouse press within button area
        if (mouse_headphoneExample.isPressedIn(button_headphoneExampleCont) && clickTrigger === 0 && mouse_headphoneExample.getPressed()[0]) {
            clickTrigger = 1; // state when mouse is pressed and held on button
            pressingTimeB = t;
        }
    
        if (clickTrigger === 1 && !button_headphoneExampleCont.contains(mouse_headphoneExample)) {
            clickTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    
        if (mouse_headphoneExample.getPressed()[0] && !button_headphoneExampleCont.contains(mouse_headphoneExample)) {
            clickTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
        }
    
        if (clickTrigger === 2 && !mouse_headphoneExample.getPressed()[0]) {
            clickTrigger = 0; // resets mouse so new click required to press button
            pressingTimeB = null;
        }
    
        if (!mouse_headphoneExample.isPressedIn(button_headphoneExampleCont) && button_headphoneExampleCont.contains(mouse_headphoneExample) && t > pressingTimeB && clickTrigger === 1) {
            clickTrigger = 3; // state when button is pressed and released without moving off button
        }
    
        if (clickTrigger === 3 && continue_button_works) {
            continueRoutine = false; // completes routine
        }
    }
    
    // *text_headphoneExample2* updates
    if (t >= 99999 && text_headphoneExample2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_headphoneExample2.tStart = t;  // (not accounting for frame time here)
      text_headphoneExample2.frameNStart = frameN;  // exact frame index
      
      text_headphoneExample2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of headphone_exampleComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function headphone_exampleRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'headphone_example' ---
    for (const thisComponent of headphone_exampleComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('headphone_example.stopped', globalClock.getTime());
    sound_headphoneExample.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('button_headphoneExamplePlay.numClicks', button_headphoneExamplePlay.numClicks);
    psychoJS.experiment.addData('button_headphoneExamplePlay.timesOn', button_headphoneExamplePlay.timesOn);
    psychoJS.experiment.addData('button_headphoneExamplePlay.timesOff', button_headphoneExamplePlay.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_headphoneExample.x', mouse_headphoneExample.x);
    psychoJS.experiment.addData('mouse_headphoneExample.y', mouse_headphoneExample.y);
    psychoJS.experiment.addData('mouse_headphoneExample.leftButton', mouse_headphoneExample.leftButton);
    psychoJS.experiment.addData('mouse_headphoneExample.midButton', mouse_headphoneExample.midButton);
    psychoJS.experiment.addData('mouse_headphoneExample.rightButton', mouse_headphoneExample.rightButton);
    psychoJS.experiment.addData('mouse_headphoneExample.time', mouse_headphoneExample.time);
    
    psychoJS.experiment.addData('button_headphoneExampleCont.numClicks', button_headphoneExampleCont.numClicks);
    psychoJS.experiment.addData('button_headphoneExampleCont.timesOn', button_headphoneExampleCont.timesOn);
    psychoJS.experiment.addData('button_headphoneExampleCont.timesOff', button_headphoneExampleCont.timesOff);
    clickTrigger = 0;
    playTrigger = 0;
    startTime = null;
    pressingTimeA = 0;
    pressingTimeB = 0;
    // the Routine "headphone_example" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trials_huggins;
function trials_hugginsLoopBegin(trials_hugginsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_huggins = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 6, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials_huggins'
    });
    psychoJS.experiment.addLoop(trials_huggins); // add the loop to the experiment
    currentLoop = trials_huggins;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_huggin of trials_huggins) {
      snapshot = trials_huggins.getSnapshot();
      trials_hugginsLoopScheduler.add(importConditions(snapshot));
      trials_hugginsLoopScheduler.add(headphone_checkRoutineBegin(snapshot));
      trials_hugginsLoopScheduler.add(headphone_checkRoutineEachFrame());
      trials_hugginsLoopScheduler.add(headphone_checkRoutineEnd(snapshot));
      trials_hugginsLoopScheduler.add(headphone_choiceRoutineBegin(snapshot));
      trials_hugginsLoopScheduler.add(headphone_choiceRoutineEachFrame());
      trials_hugginsLoopScheduler.add(headphone_choiceRoutineEnd(snapshot));
      trials_hugginsLoopScheduler.add(headphone_choice_resetRoutineBegin(snapshot));
      trials_hugginsLoopScheduler.add(headphone_choice_resetRoutineEachFrame());
      trials_hugginsLoopScheduler.add(headphone_choice_resetRoutineEnd(snapshot));
      trials_hugginsLoopScheduler.add(headphone_pass_checkRoutineBegin(snapshot));
      trials_hugginsLoopScheduler.add(headphone_pass_checkRoutineEachFrame());
      trials_hugginsLoopScheduler.add(headphone_pass_checkRoutineEnd(snapshot));
      trials_hugginsLoopScheduler.add(trials_hugginsLoopEndIteration(trials_hugginsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_hugginsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_huggins);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_hugginsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_expAudio;
function trials_expAudioLoopBegin(trials_expAudioLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_expAudio = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("exp_stims_" + expInfo["participant"].toString()) + ".csv"),
      seed: undefined, name: 'trials_expAudio'
    });
    psychoJS.experiment.addLoop(trials_expAudio); // add the loop to the experiment
    currentLoop = trials_expAudio;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_expAudio of trials_expAudio) {
      snapshot = trials_expAudio.getSnapshot();
      trials_expAudioLoopScheduler.add(importConditions(snapshot));
      trials_expAudioLoopScheduler.add(next_melodyRoutineBegin(snapshot));
      trials_expAudioLoopScheduler.add(next_melodyRoutineEachFrame());
      trials_expAudioLoopScheduler.add(next_melodyRoutineEnd(snapshot));
      trials_expAudioLoopScheduler.add(play_audioRoutineBegin(snapshot));
      trials_expAudioLoopScheduler.add(play_audioRoutineEachFrame());
      trials_expAudioLoopScheduler.add(play_audioRoutineEnd(snapshot));
      trials_expAudioLoopScheduler.add(exp_clicks_file_loadingRoutineBegin(snapshot));
      trials_expAudioLoopScheduler.add(exp_clicks_file_loadingRoutineEachFrame());
      trials_expAudioLoopScheduler.add(exp_clicks_file_loadingRoutineEnd(snapshot));
      trials_expAudioLoopScheduler.add(exp_attention_playbackRoutineBegin(snapshot));
      trials_expAudioLoopScheduler.add(exp_attention_playbackRoutineEachFrame());
      trials_expAudioLoopScheduler.add(exp_attention_playbackRoutineEnd(snapshot));
      trials_expAudioLoopScheduler.add(exp_attention_choiceRoutineBegin(snapshot));
      trials_expAudioLoopScheduler.add(exp_attention_choiceRoutineEachFrame());
      trials_expAudioLoopScheduler.add(exp_attention_choiceRoutineEnd(snapshot));
      trials_expAudioLoopScheduler.add(exp_attention_resetRoutineBegin(snapshot));
      trials_expAudioLoopScheduler.add(exp_attention_resetRoutineEachFrame());
      trials_expAudioLoopScheduler.add(exp_attention_resetRoutineEnd(snapshot));
      trials_expAudioLoopScheduler.add(attention_pass_checkRoutineBegin(snapshot));
      trials_expAudioLoopScheduler.add(attention_pass_checkRoutineEachFrame());
      trials_expAudioLoopScheduler.add(attention_pass_checkRoutineEnd(snapshot));
      trials_expAudioLoopScheduler.add(trials_expAudioLoopEndIteration(trials_expAudioLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_expAudioLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_expAudio);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_expAudioLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_testAudio;
function trials_testAudioLoopBegin(trials_testAudioLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_testAudio = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: (("test_stims_" + expInfo["participant"].toString()) + ".csv"),
      seed: undefined, name: 'trials_testAudio'
    });
    psychoJS.experiment.addLoop(trials_testAudio); // add the loop to the experiment
    currentLoop = trials_testAudio;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrials_testAudio of trials_testAudio) {
      snapshot = trials_testAudio.getSnapshot();
      trials_testAudioLoopScheduler.add(importConditions(snapshot));
      trials_testAudioLoopScheduler.add(next_melodyRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(next_melodyRoutineEachFrame());
      trials_testAudioLoopScheduler.add(next_melodyRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(play_audioRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(play_audioRoutineEachFrame());
      trials_testAudioLoopScheduler.add(play_audioRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(test_choiceRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(test_choiceRoutineEachFrame());
      trials_testAudioLoopScheduler.add(test_choiceRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(choice_resetRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(choice_resetRoutineEachFrame());
      trials_testAudioLoopScheduler.add(choice_resetRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(test_clicks_file_loadingRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(test_clicks_file_loadingRoutineEachFrame());
      trials_testAudioLoopScheduler.add(test_clicks_file_loadingRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(test_attention_playbackRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(test_attention_playbackRoutineEachFrame());
      trials_testAudioLoopScheduler.add(test_attention_playbackRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(test_attention_choiceRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(test_attention_choiceRoutineEachFrame());
      trials_testAudioLoopScheduler.add(test_attention_choiceRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(test_attention_resetRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(test_attention_resetRoutineEachFrame());
      trials_testAudioLoopScheduler.add(test_attention_resetRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(attention_pass_checkRoutineBegin(snapshot));
      trials_testAudioLoopScheduler.add(attention_pass_checkRoutineEachFrame());
      trials_testAudioLoopScheduler.add(attention_pass_checkRoutineEnd(snapshot));
      trials_testAudioLoopScheduler.add(trials_testAudioLoopEndIteration(trials_testAudioLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_testAudioLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_testAudio);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_testAudioLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var headphone_checkComponents;
function headphone_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'headphone_check' ---
    t = 0;
    headphone_checkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('headphone_check.started', globalClock.getTime());
    huggins_trial_counter += 1
    correct_file = Math.floor(Math.random() * 3) + 1;
    startTime = null
    
    //audioFilePath = 'sounds/HugginsPitch_set' + huggins_trial_counter + '_' + correct_file + '.flac'; // With sounds ext.
    //audioFilePath = 'HugginsPitch_set' + huggins_trial_counter + '_' + correct_file + '.flac'; // Without sounds ext.
    //audioFilePath = `${GCS_SOUNDS_URL} + 'HugginsPitch_set' + huggins_trial_counter + '_' + correct_file + '.flac'` // As full URL
    //audioFilePath = `${GCS_SOUNDS_URL}HugginsPitch_set{huggins_trial_counter}_{correct_file}.flac`
    sound_huggins.setValue((((("HugginsPitch_set" + huggins_trial_counter.toString()) + "_") + correct_file.toString()) + ".flac"));
    sound_huggins.setVolume(1.0);
    // keep track of which components have finished
    headphone_checkComponents = [];
    headphone_checkComponents.push(sound_huggins);
    headphone_checkComponents.push(text_headphoneCheck);
    
    for (const thisComponent of headphone_checkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function headphone_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'headphone_check' ---
    // get current time
    t = headphone_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (t >= 0.1 && sound_huggins.status === PsychoJS.Status.NOT_STARTED) {
        sound_huggins.play();
        startTime = t;
    }
    
    if ((t - startTime) >= sound_huggins.getDuration() && startTime !== null) {
        sound_huggins.stop();
        continueRoutine = false;
    }
    // start/stop sound_huggins
    if (t >= 99999 && sound_huggins.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_huggins.tStart = t;  // (not accounting for frame time here)
      sound_huggins.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_huggins.play(); });  // screen flip
      sound_huggins.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_huggins.getDuration() + sound_huggins.tStart)     && sound_huggins.status === PsychoJS.Status.STARTED) {
      sound_huggins.stop();  // stop the sound (if longer than duration)
      sound_huggins.status = PsychoJS.Status.FINISHED;
    }
    
    // *text_headphoneCheck* updates
    if (t >= 0.0 && text_headphoneCheck.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_headphoneCheck.tStart = t;  // (not accounting for frame time here)
      text_headphoneCheck.frameNStart = frameN;  // exact frame index
      
      text_headphoneCheck.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of headphone_checkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var audioFilePath;
function headphone_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'headphone_check' ---
    for (const thisComponent of headphone_checkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('headphone_check.stopped', globalClock.getTime());
    psychoJS.experiment.addData('hugginsFileName', audioFilePath);
    
    audioFilePath = null;
    sound_huggins.stop();  // ensure sound has stopped at end of Routine
    // the Routine "headphone_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var i;
var buttonChoice;
var headphone_choiceComponents;
function headphone_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'headphone_choice' ---
    t = 0;
    headphone_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('headphone_choice.started', globalClock.getTime());
    // reset button_huggins_1 to account for continued clicks & clear times on/off
    button_huggins_1.reset()
    // reset button_huggins_2 to account for continued clicks & clear times on/off
    button_huggins_2.reset()
    // reset button_huggins_3 to account for continued clicks & clear times on/off
    button_huggins_3.reset()
    clickTrigger = 0;
    i = 0;
    buttonChoice = null;
    startTime = null;
    routineStartTime = t;
    waitTime = 0.5;
    // setup some python lists for storing info about the mouse_hugginsChoice
    // current position of the mouse:
    mouse_hugginsChoice.x = [];
    mouse_hugginsChoice.y = [];
    mouse_hugginsChoice.leftButton = [];
    mouse_hugginsChoice.midButton = [];
    mouse_hugginsChoice.rightButton = [];
    mouse_hugginsChoice.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    headphone_choiceComponents = [];
    headphone_choiceComponents.push(button_huggins_1);
    headphone_choiceComponents.push(button_huggins_2);
    headphone_choiceComponents.push(button_huggins_3);
    headphone_choiceComponents.push(mouse_hugginsChoice);
    headphone_choiceComponents.push(text_hugginsChoice);
    
    for (const thisComponent of headphone_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function headphone_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'headphone_choice' ---
    // get current time
    t = headphone_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_huggins_1* updates
    if (t >= 0 && button_huggins_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_huggins_1.tStart = t;  // (not accounting for frame time here)
      button_huggins_1.frameNStart = frameN;  // exact frame index
      
      button_huggins_1.setAutoDraw(true);
    }
    
    if (button_huggins_1.status === PsychoJS.Status.STARTED) {
      // check whether button_huggins_1 has been pressed
      if (button_huggins_1.isClicked) {
        if (!button_huggins_1.wasClicked) {
          // store time of first click
          button_huggins_1.timesOn.push(button_huggins_1.clock.getTime());
          // store time clicked until
          button_huggins_1.timesOff.push(button_huggins_1.clock.getTime());
        } else {
          // update time clicked until;
          button_huggins_1.timesOff[button_huggins_1.timesOff.length - 1] = button_huggins_1.clock.getTime();
        }
        if (!button_huggins_1.wasClicked) {
          
        }
        // if button_huggins_1 is still clicked next frame, it is not a new click
        button_huggins_1.wasClicked = true;
      } else {
        // if button_huggins_1 is clicked next frame, it is a new click
        button_huggins_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_huggins_1 hasn't started / has finished
      button_huggins_1.clock.reset();
      // if button_huggins_1 is clicked next frame, it is a new click
      button_huggins_1.wasClicked = false;
    }
    
    // *button_huggins_2* updates
    if (t >= 0 && button_huggins_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_huggins_2.tStart = t;  // (not accounting for frame time here)
      button_huggins_2.frameNStart = frameN;  // exact frame index
      
      button_huggins_2.setAutoDraw(true);
    }
    
    if (button_huggins_2.status === PsychoJS.Status.STARTED) {
      // check whether button_huggins_2 has been pressed
      if (button_huggins_2.isClicked) {
        if (!button_huggins_2.wasClicked) {
          // store time of first click
          button_huggins_2.timesOn.push(button_huggins_2.clock.getTime());
          // store time clicked until
          button_huggins_2.timesOff.push(button_huggins_2.clock.getTime());
        } else {
          // update time clicked until;
          button_huggins_2.timesOff[button_huggins_2.timesOff.length - 1] = button_huggins_2.clock.getTime();
        }
        if (!button_huggins_2.wasClicked) {
          
        }
        // if button_huggins_2 is still clicked next frame, it is not a new click
        button_huggins_2.wasClicked = true;
      } else {
        // if button_huggins_2 is clicked next frame, it is a new click
        button_huggins_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_huggins_2 hasn't started / has finished
      button_huggins_2.clock.reset();
      // if button_huggins_2 is clicked next frame, it is a new click
      button_huggins_2.wasClicked = false;
    }
    
    // *button_huggins_3* updates
    if (t >= 0 && button_huggins_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_huggins_3.tStart = t;  // (not accounting for frame time here)
      button_huggins_3.frameNStart = frameN;  // exact frame index
      
      button_huggins_3.setAutoDraw(true);
    }
    
    if (button_huggins_3.status === PsychoJS.Status.STARTED) {
      // check whether button_huggins_3 has been pressed
      if (button_huggins_3.isClicked) {
        if (!button_huggins_3.wasClicked) {
          // store time of first click
          button_huggins_3.timesOn.push(button_huggins_3.clock.getTime());
          // store time clicked until
          button_huggins_3.timesOff.push(button_huggins_3.clock.getTime());
        } else {
          // update time clicked until;
          button_huggins_3.timesOff[button_huggins_3.timesOff.length - 1] = button_huggins_3.clock.getTime();
        }
        if (!button_huggins_3.wasClicked) {
          
        }
        // if button_huggins_3 is still clicked next frame, it is not a new click
        button_huggins_3.wasClicked = true;
      } else {
        // if button_huggins_3 is clicked next frame, it is a new click
        button_huggins_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_huggins_3 hasn't started / has finished
      button_huggins_3.clock.reset();
      // if button_huggins_3 is clicked next frame, it is a new click
      button_huggins_3.wasClicked = false;
    }
    if ((t - routineStartTime) > waitTime) {
    
        // Array to hold all button references
        let buttons = [button_huggins_1, button_huggins_2, button_huggins_3];
    
        // Check for left mouse press within button area
        for (let i = 0; i < buttons.length; i++) {
            if (mouse_hugginsChoice.isPressedIn(buttons[i]) && clickTrigger === 0 && mouse_hugginsChoice.getPressed()[0]) {
                clickTrigger = 1; // state when mouse is pressed and held on button
                pressingTime = t;
                buttonChoice = buttons[i]; // Assign choice based on button mapping
                break; // Exit the loop once a button is pressed
            }
        }
    
        if (clickTrigger === 1) {
            if (!buttonChoice.contains(mouse_hugginsChoice)) {
                clickTrigger = 2;
                buttonChoice = null; // state when mouse is pressed on button (held) and then moved off button (while holding)
            }
        }
    
        if (mouse_hugginsChoice.getPressed()[0] && buttons.every(button => !button.contains(mouse_hugginsChoice))) {
            clickTrigger = 2;
            buttonChoice = null; // State when mouse is pressed but not on button (prevents off-button presses activating button)
        }
    
        if (clickTrigger === 2 && !mouse_hugginsChoice.getPressed()[0]) {
            clickTrigger = 0; // resets mouse so new click required to press button
            buttonChoice = null;
        }
    
        if (clickTrigger === 1) {
            if (!mouse_hugginsChoice.isPressedIn(buttonChoice) && buttonChoice.contains(mouse_hugginsChoice) && t > pressingTime) {
                clickTrigger = 3; // state when button is pressed and released without moving off button
                buttonChoice.numClicks = 1;
                continueRoutine = false;
            }
        }
    }
    // *mouse_hugginsChoice* updates
    if (t >= 0.0 && mouse_hugginsChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_hugginsChoice.tStart = t;  // (not accounting for frame time here)
      mouse_hugginsChoice.frameNStart = frameN;  // exact frame index
      
      mouse_hugginsChoice.status = PsychoJS.Status.STARTED;
      mouse_hugginsChoice.mouseClock.reset();
      prevButtonState = mouse_hugginsChoice.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_hugginsChoice.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_hugginsChoice.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_hugginsChoice.getPos();
          mouse_hugginsChoice.x.push(_mouseXYs[0]);
          mouse_hugginsChoice.y.push(_mouseXYs[1]);
          mouse_hugginsChoice.leftButton.push(_mouseButtons[0]);
          mouse_hugginsChoice.midButton.push(_mouseButtons[1]);
          mouse_hugginsChoice.rightButton.push(_mouseButtons[2]);
          mouse_hugginsChoice.time.push(mouse_hugginsChoice.mouseClock.getTime());
        }
      }
    }
    
    // *text_hugginsChoice* updates
    if (t >= 0.0 && text_hugginsChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_hugginsChoice.tStart = t;  // (not accounting for frame time here)
      text_hugginsChoice.frameNStart = frameN;  // exact frame index
      
      text_hugginsChoice.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of headphone_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function headphone_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'headphone_choice' ---
    for (const thisComponent of headphone_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('headphone_choice.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_huggins_1.numClicks', button_huggins_1.numClicks);
    psychoJS.experiment.addData('button_huggins_1.timesOn', button_huggins_1.timesOn);
    psychoJS.experiment.addData('button_huggins_1.timesOff', button_huggins_1.timesOff);
    psychoJS.experiment.addData('button_huggins_2.numClicks', button_huggins_2.numClicks);
    psychoJS.experiment.addData('button_huggins_2.timesOn', button_huggins_2.timesOn);
    psychoJS.experiment.addData('button_huggins_2.timesOff', button_huggins_2.timesOff);
    psychoJS.experiment.addData('button_huggins_3.numClicks', button_huggins_3.numClicks);
    psychoJS.experiment.addData('button_huggins_3.timesOn', button_huggins_3.timesOn);
    psychoJS.experiment.addData('button_huggins_3.timesOff', button_huggins_3.timesOff);
    if (correct_file.toString() === buttonChoice.text) {
        correct_huggins_trials += 1;
    }
    
    correct_file = [];
    
    startTime = null;
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_hugginsChoice.x', mouse_hugginsChoice.x);
    psychoJS.experiment.addData('mouse_hugginsChoice.y', mouse_hugginsChoice.y);
    psychoJS.experiment.addData('mouse_hugginsChoice.leftButton', mouse_hugginsChoice.leftButton);
    psychoJS.experiment.addData('mouse_hugginsChoice.midButton', mouse_hugginsChoice.midButton);
    psychoJS.experiment.addData('mouse_hugginsChoice.rightButton', mouse_hugginsChoice.rightButton);
    psychoJS.experiment.addData('mouse_hugginsChoice.time', mouse_hugginsChoice.time);
    
    // the Routine "headphone_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var headphone_choice_resetComponents;
function headphone_choice_resetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'headphone_choice_reset' ---
    t = 0;
    headphone_choice_resetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('headphone_choice_reset.started', globalClock.getTime());
    button_huggins_1.numClicks = 0;
    button_huggins_2.numClicks = 0;
    button_huggins_3.numClicks = 0;
    // keep track of which components have finished
    headphone_choice_resetComponents = [];
    
    for (const thisComponent of headphone_choice_resetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function headphone_choice_resetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'headphone_choice_reset' ---
    // get current time
    t = headphone_choice_resetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of headphone_choice_resetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function headphone_choice_resetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'headphone_choice_reset' ---
    for (const thisComponent of headphone_choice_resetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('headphone_choice_reset.stopped', globalClock.getTime());
    // the Routine "headphone_choice_reset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var headphone_pass_checkComponents;
function headphone_pass_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'headphone_pass_check' ---
    t = 0;
    headphone_pass_checkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('headphone_pass_check.started', globalClock.getTime());
    if (huggins_trial_counter - correct_huggins_trials < 2) {
        continueRoutine = false;
    }
    
    // reset button_compFail to account for continued clicks & clear times on/off
    button_compFail.reset()
    // keep track of which components have finished
    headphone_pass_checkComponents = [];
    headphone_pass_checkComponents.push(text_compFail);
    headphone_pass_checkComponents.push(button_compFail);
    
    for (const thisComponent of headphone_pass_checkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function headphone_pass_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'headphone_pass_check' ---
    // get current time
    t = headphone_pass_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_compFail* updates
    if (t >= 0.0 && text_compFail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_compFail.tStart = t;  // (not accounting for frame time here)
      text_compFail.frameNStart = frameN;  // exact frame index
      
      text_compFail.setAutoDraw(true);
    }
    
    
    // *button_compFail* updates
    if (t >= 0 && button_compFail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_compFail.tStart = t;  // (not accounting for frame time here)
      button_compFail.frameNStart = frameN;  // exact frame index
      
      button_compFail.setAutoDraw(true);
    }
    
    if (button_compFail.status === PsychoJS.Status.STARTED) {
      // check whether button_compFail has been pressed
      if (button_compFail.isClicked) {
        if (!button_compFail.wasClicked) {
          // store time of first click
          button_compFail.timesOn.push(button_compFail.clock.getTime());
          // store time clicked until
          button_compFail.timesOff.push(button_compFail.clock.getTime());
        } else {
          // update time clicked until;
          button_compFail.timesOff[button_compFail.timesOff.length - 1] = button_compFail.clock.getTime();
        }
        if (!button_compFail.wasClicked) {
          window.location.href = "https://app.prolific.com/submissions/complete?cc=C1LF197M";
        }
        // if button_compFail is still clicked next frame, it is not a new click
        button_compFail.wasClicked = true;
      } else {
        // if button_compFail is clicked next frame, it is a new click
        button_compFail.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_compFail hasn't started / has finished
      button_compFail.clock.reset();
      // if button_compFail is clicked next frame, it is a new click
      button_compFail.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of headphone_pass_checkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function headphone_pass_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'headphone_pass_check' ---
    for (const thisComponent of headphone_pass_checkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('headphone_pass_check.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_compFail.numClicks', button_compFail.numClicks);
    psychoJS.experiment.addData('button_compFail.timesOn', button_compFail.timesOn);
    psychoJS.experiment.addData('button_compFail.timesOff', button_compFail.timesOff);
    // the Routine "headphone_pass_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var volume_adjust_textComponents;
function volume_adjust_textRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'volume_adjust_text' ---
    t = 0;
    volume_adjust_textClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('volume_adjust_text.started', globalClock.getTime());
    // reset button_nextPageVolAdjustText to account for continued clicks & clear times on/off
    button_nextPageVolAdjustText.reset()
    // setup some python lists for storing info about the mouse_nextPageVolAdjustText
    // current position of the mouse:
    mouse_nextPageVolAdjustText.x = [];
    mouse_nextPageVolAdjustText.y = [];
    mouse_nextPageVolAdjustText.leftButton = [];
    mouse_nextPageVolAdjustText.midButton = [];
    mouse_nextPageVolAdjustText.rightButton = [];
    mouse_nextPageVolAdjustText.time = [];
    gotValidClick = false; // until a click is received
    clickTrigger = 0;
    routineStartTime = t;
    waitTime = 3;
    // keep track of which components have finished
    volume_adjust_textComponents = [];
    volume_adjust_textComponents.push(text_volAdjustLong);
    volume_adjust_textComponents.push(button_nextPageVolAdjustText);
    volume_adjust_textComponents.push(mouse_nextPageVolAdjustText);
    
    for (const thisComponent of volume_adjust_textComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var pressingTime;
function volume_adjust_textRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'volume_adjust_text' ---
    // get current time
    t = volume_adjust_textClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_volAdjustLong* updates
    if (t >= 0.0 && text_volAdjustLong.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_volAdjustLong.tStart = t;  // (not accounting for frame time here)
      text_volAdjustLong.frameNStart = frameN;  // exact frame index
      
      text_volAdjustLong.setAutoDraw(true);
    }
    
    
    // *button_nextPageVolAdjustText* updates
    if (t >= 0 && button_nextPageVolAdjustText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_nextPageVolAdjustText.tStart = t;  // (not accounting for frame time here)
      button_nextPageVolAdjustText.frameNStart = frameN;  // exact frame index
      
      button_nextPageVolAdjustText.setAutoDraw(true);
    }
    
    if (button_nextPageVolAdjustText.status === PsychoJS.Status.STARTED) {
      // check whether button_nextPageVolAdjustText has been pressed
      if (button_nextPageVolAdjustText.isClicked) {
        if (!button_nextPageVolAdjustText.wasClicked) {
          // store time of first click
          button_nextPageVolAdjustText.timesOn.push(button_nextPageVolAdjustText.clock.getTime());
          // store time clicked until
          button_nextPageVolAdjustText.timesOff.push(button_nextPageVolAdjustText.clock.getTime());
        } else {
          // update time clicked until;
          button_nextPageVolAdjustText.timesOff[button_nextPageVolAdjustText.timesOff.length - 1] = button_nextPageVolAdjustText.clock.getTime();
        }
        if (!button_nextPageVolAdjustText.wasClicked) {
          
        }
        // if button_nextPageVolAdjustText is still clicked next frame, it is not a new click
        button_nextPageVolAdjustText.wasClicked = true;
      } else {
        // if button_nextPageVolAdjustText is clicked next frame, it is a new click
        button_nextPageVolAdjustText.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_nextPageVolAdjustText hasn't started / has finished
      button_nextPageVolAdjustText.clock.reset();
      // if button_nextPageVolAdjustText is clicked next frame, it is a new click
      button_nextPageVolAdjustText.wasClicked = false;
    }
    // *mouse_nextPageVolAdjustText* updates
    if (t >= 0.0 && mouse_nextPageVolAdjustText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_nextPageVolAdjustText.tStart = t;  // (not accounting for frame time here)
      mouse_nextPageVolAdjustText.frameNStart = frameN;  // exact frame index
      
      mouse_nextPageVolAdjustText.status = PsychoJS.Status.STARTED;
      mouse_nextPageVolAdjustText.mouseClock.reset();
      prevButtonState = mouse_nextPageVolAdjustText.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_nextPageVolAdjustText.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_nextPageVolAdjustText.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_nextPageVolAdjustText.getPos();
          mouse_nextPageVolAdjustText.x.push(_mouseXYs[0]);
          mouse_nextPageVolAdjustText.y.push(_mouseXYs[1]);
          mouse_nextPageVolAdjustText.leftButton.push(_mouseButtons[0]);
          mouse_nextPageVolAdjustText.midButton.push(_mouseButtons[1]);
          mouse_nextPageVolAdjustText.rightButton.push(_mouseButtons[2]);
          mouse_nextPageVolAdjustText.time.push(mouse_nextPageVolAdjustText.mouseClock.getTime());
        }
      }
    }
    if ((t - routineStartTime) > waitTime) {
    
        // Check for left mouse press within button area
        if (mouse_nextPageVolAdjustText.isPressedIn(button_nextPageVolAdjustText) && clickTrigger === 0 && mouse_nextPageVolAdjustText.getPressed()[0]) {
            clickTrigger = 1; // state when mouse is pressed and held on button
            pressingTime = t;
        }
    
        if (clickTrigger === 1 && !button_nextPageVolAdjustText.contains(mouse_nextPageVolAdjustText)) {
            clickTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    
        if (mouse_nextPageVolAdjustText.getPressed()[0] && !button_nextPageVolAdjustText.contains(mouse_nextPageVolAdjustText)) {
            clickTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
        }
    
        if (clickTrigger === 2 && !mouse_nextPageVolAdjustText.getPressed()[0]) {
            clickTrigger = 0; // resets mouse so new click required to press button
        }
    
        if (!mouse_nextPageVolAdjustText.isPressedIn(button_nextPageVolAdjustText) && button_nextPageVolAdjustText.contains(mouse_nextPageVolAdjustText) && t > pressingTime && clickTrigger === 1) {
            clickTrigger = 3; // state when button is pressed and released without moving off button
        }
    
        if (clickTrigger === 3) {
            clickTrigger = 0; // resets clickTrigger
            continueRoutine = false; // completes routine
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of volume_adjust_textComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function volume_adjust_textRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'volume_adjust_text' ---
    for (const thisComponent of volume_adjust_textComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('volume_adjust_text.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_nextPageVolAdjustText.numClicks', button_nextPageVolAdjustText.numClicks);
    psychoJS.experiment.addData('button_nextPageVolAdjustText.timesOn', button_nextPageVolAdjustText.timesOn);
    psychoJS.experiment.addData('button_nextPageVolAdjustText.timesOff', button_nextPageVolAdjustText.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_nextPageVolAdjustText.x', mouse_nextPageVolAdjustText.x);
    psychoJS.experiment.addData('mouse_nextPageVolAdjustText.y', mouse_nextPageVolAdjustText.y);
    psychoJS.experiment.addData('mouse_nextPageVolAdjustText.leftButton', mouse_nextPageVolAdjustText.leftButton);
    psychoJS.experiment.addData('mouse_nextPageVolAdjustText.midButton', mouse_nextPageVolAdjustText.midButton);
    psychoJS.experiment.addData('mouse_nextPageVolAdjustText.rightButton', mouse_nextPageVolAdjustText.rightButton);
    psychoJS.experiment.addData('mouse_nextPageVolAdjustText.time', mouse_nextPageVolAdjustText.time);
    
    // the Routine "volume_adjust_text" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var button_highFreq_pressed;
var button_lowFreq_pressed;
var volume_adjustComponents;
function volume_adjustRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'volume_adjust' ---
    t = 0;
    volume_adjustClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('volume_adjust.started', globalClock.getTime());
    sound_highFreq.setValue((("participant_" + expInfo["participant"].toString()) + "_high_freq_vol_adj.wav"));
    sound_highFreq.setVolume(1.0);
    sound_lowFreq.setValue((("participant_" + expInfo["participant"].toString()) + "_low_freq_vol_adj.wav"));
    sound_lowFreq.setVolume(1.0);
    // setup some python lists for storing info about the mouse_nextPageVolAdjust
    // current position of the mouse:
    mouse_nextPageVolAdjust.x = [];
    mouse_nextPageVolAdjust.y = [];
    mouse_nextPageVolAdjust.leftButton = [];
    mouse_nextPageVolAdjust.midButton = [];
    mouse_nextPageVolAdjust.rightButton = [];
    mouse_nextPageVolAdjust.time = [];
    gotValidClick = false; // until a click is received
    // reset button_highFreq to account for continued clicks & clear times on/off
    button_highFreq.reset()
    // reset button_lowFreq to account for continued clicks & clear times on/off
    button_lowFreq.reset()
    // reset button_continue to account for continued clicks & clear times on/off
    button_continue.reset()
    let button_clicked = false;
    let stimulus_onset_time = null;
    let current_sound = null;
    
    button_highFreq_pressed = false;
    button_lowFreq_pressed = false;
    
    button_continue.setAutoDraw(false); // Ensure it's not visible
    button_continue.enabled = false;   // Disable interactivity
    continue_button_works = false;
    clickTrigger = 0;
    // keep track of which components have finished
    volume_adjustComponents = [];
    volume_adjustComponents.push(sound_highFreq);
    volume_adjustComponents.push(sound_lowFreq);
    volume_adjustComponents.push(mouse_nextPageVolAdjust);
    volume_adjustComponents.push(button_highFreq);
    volume_adjustComponents.push(button_lowFreq);
    volume_adjustComponents.push(button_continue);
    volume_adjustComponents.push(text_volAdjustShort);
    volume_adjustComponents.push(text_volAdjustShort2);
    
    for (const thisComponent of volume_adjustComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var stimulus_onset_time;
var button_clicked;
var current_sound;
function volume_adjustRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'volume_adjust' ---
    // get current time
    t = volume_adjustClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_highFreq
    if (t >= 99999 && sound_highFreq.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_highFreq.tStart = t;  // (not accounting for frame time here)
      sound_highFreq.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_highFreq.play(); });  // screen flip
      sound_highFreq.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_highFreq.getDuration() + sound_highFreq.tStart)     && sound_highFreq.status === PsychoJS.Status.STARTED) {
      sound_highFreq.stop();  // stop the sound (if longer than duration)
      sound_highFreq.status = PsychoJS.Status.FINISHED;
    }
    // start/stop sound_lowFreq
    if (t >= 99999 && sound_lowFreq.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_lowFreq.tStart = t;  // (not accounting for frame time here)
      sound_lowFreq.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_lowFreq.play(); });  // screen flip
      sound_lowFreq.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_lowFreq.getDuration() + sound_lowFreq.tStart)     && sound_lowFreq.status === PsychoJS.Status.STARTED) {
      sound_lowFreq.stop();  // stop the sound (if longer than duration)
      sound_lowFreq.status = PsychoJS.Status.FINISHED;
    }
    // *mouse_nextPageVolAdjust* updates
    if (t >= 0.0 && mouse_nextPageVolAdjust.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_nextPageVolAdjust.tStart = t;  // (not accounting for frame time here)
      mouse_nextPageVolAdjust.frameNStart = frameN;  // exact frame index
      
      mouse_nextPageVolAdjust.status = PsychoJS.Status.STARTED;
      mouse_nextPageVolAdjust.mouseClock.reset();
      prevButtonState = mouse_nextPageVolAdjust.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_nextPageVolAdjust.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_nextPageVolAdjust.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_nextPageVolAdjust.getPos();
          mouse_nextPageVolAdjust.x.push(_mouseXYs[0]);
          mouse_nextPageVolAdjust.y.push(_mouseXYs[1]);
          mouse_nextPageVolAdjust.leftButton.push(_mouseButtons[0]);
          mouse_nextPageVolAdjust.midButton.push(_mouseButtons[1]);
          mouse_nextPageVolAdjust.rightButton.push(_mouseButtons[2]);
          mouse_nextPageVolAdjust.time.push(mouse_nextPageVolAdjust.mouseClock.getTime());
        }
      }
    }
    
    // *button_highFreq* updates
    if (t >= 0 && button_highFreq.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_highFreq.tStart = t;  // (not accounting for frame time here)
      button_highFreq.frameNStart = frameN;  // exact frame index
      
      button_highFreq.setAutoDraw(true);
    }
    
    if (button_highFreq.status === PsychoJS.Status.STARTED) {
      // check whether button_highFreq has been pressed
      if (button_highFreq.isClicked) {
        if (!button_highFreq.wasClicked) {
          // store time of first click
          button_highFreq.timesOn.push(button_highFreq.clock.getTime());
          // store time clicked until
          button_highFreq.timesOff.push(button_highFreq.clock.getTime());
        } else {
          // update time clicked until;
          button_highFreq.timesOff[button_highFreq.timesOff.length - 1] = button_highFreq.clock.getTime();
        }
        if (!button_highFreq.wasClicked) {
          
        }
        // if button_highFreq is still clicked next frame, it is not a new click
        button_highFreq.wasClicked = true;
      } else {
        // if button_highFreq is clicked next frame, it is a new click
        button_highFreq.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_highFreq hasn't started / has finished
      button_highFreq.clock.reset();
      // if button_highFreq is clicked next frame, it is a new click
      button_highFreq.wasClicked = false;
    }
    
    // *button_lowFreq* updates
    if (t >= 0 && button_lowFreq.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_lowFreq.tStart = t;  // (not accounting for frame time here)
      button_lowFreq.frameNStart = frameN;  // exact frame index
      
      button_lowFreq.setAutoDraw(true);
    }
    
    if (button_lowFreq.status === PsychoJS.Status.STARTED) {
      // check whether button_lowFreq has been pressed
      if (button_lowFreq.isClicked) {
        if (!button_lowFreq.wasClicked) {
          // store time of first click
          button_lowFreq.timesOn.push(button_lowFreq.clock.getTime());
          // store time clicked until
          button_lowFreq.timesOff.push(button_lowFreq.clock.getTime());
        } else {
          // update time clicked until;
          button_lowFreq.timesOff[button_lowFreq.timesOff.length - 1] = button_lowFreq.clock.getTime();
        }
        if (!button_lowFreq.wasClicked) {
          
        }
        // if button_lowFreq is still clicked next frame, it is not a new click
        button_lowFreq.wasClicked = true;
      } else {
        // if button_lowFreq is clicked next frame, it is a new click
        button_lowFreq.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_lowFreq hasn't started / has finished
      button_lowFreq.clock.reset();
      // if button_lowFreq is clicked next frame, it is a new click
      button_lowFreq.wasClicked = false;
    }
    
    // *button_continue* updates
    if (t >= 99999 && button_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_continue.tStart = t;  // (not accounting for frame time here)
      button_continue.frameNStart = frameN;  // exact frame index
      
      button_continue.setAutoDraw(true);
    }
    
    if (button_continue.status === PsychoJS.Status.STARTED) {
      // check whether button_continue has been pressed
      if (button_continue.isClicked) {
        if (!button_continue.wasClicked) {
          // store time of first click
          button_continue.timesOn.push(button_continue.clock.getTime());
          // store time clicked until
          button_continue.timesOff.push(button_continue.clock.getTime());
        } else {
          // update time clicked until;
          button_continue.timesOff[button_continue.timesOff.length - 1] = button_continue.clock.getTime();
        }
        if (!button_continue.wasClicked) {
          
        }
        // if button_continue is still clicked next frame, it is not a new click
        button_continue.wasClicked = true;
      } else {
        // if button_continue is clicked next frame, it is a new click
        button_continue.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_continue hasn't started / has finished
      button_continue.clock.reset();
      // if button_continue is clicked next frame, it is a new click
      button_continue.wasClicked = false;
    }
    if (mouse_nextPageVolAdjust.isPressedIn(button_highFreq) && !button_clicked) {
        if (sound_highFreq.status === PsychoJS.Status.STARTED) {
            sound_highFreq.stop();
        }
        if (sound_lowFreq.status === PsychoJS.Status.STARTED) {
            sound_lowFreq.stop();
        }
        stimulus_onset_time = t + 0.1; // 100 ms delay
        button_clicked = true;
        button_highFreq_pressed = true;
        current_sound = sound_highFreq;
    }
    
    if (mouse_nextPageVolAdjust.isPressedIn(button_lowFreq) && !button_clicked) {
        if (sound_highFreq.status === PsychoJS.Status.STARTED) {
            sound_highFreq.stop();
        }
        if (sound_lowFreq.status === PsychoJS.Status.STARTED) {
            sound_lowFreq.stop();
        }
        stimulus_onset_time = t + 0.1; // 100 ms delay
        button_clicked = true;
        button_lowFreq_pressed = true;
        current_sound = sound_lowFreq;
    }
    
    // Check if it's time to present the stimulus
    if (button_clicked && t >= stimulus_onset_time) {
        if (current_sound && current_sound.status !== PsychoJS.Status.STARTED) {
            current_sound.play();
        }
        button_clicked = false;
    }
    
    // *text_volAdjustShort* updates
    if (t >= 0.0 && text_volAdjustShort.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_volAdjustShort.tStart = t;  // (not accounting for frame time here)
      text_volAdjustShort.frameNStart = frameN;  // exact frame index
      
      text_volAdjustShort.setAutoDraw(true);
    }
    
    if (!button_continue.enabled && button_highFreq_pressed && button_lowFreq_pressed) {
        button_continue.setAutoDraw(true); // Show the button
        button_continue.enabled = true;   // Enable interactivity
        text_volAdjustShort2.setAutoDraw(true);
        continue_button_works = true;
        mouse_nextPageVolAdjust.clickReset(); // Prevents clicks on hidden button being registered
    }
    
    // Check for left mouse press within button area
    if (mouse_nextPageVolAdjust.isPressedIn(button_continue) && clickTrigger === 0 && mouse_nextPageVolAdjust.getPressed()[0]) {
        clickTrigger = 1; // state when mouse is pressed and held on button
        pressingTime = t;
    }
    
    if (clickTrigger === 1 && !button_continue.contains(mouse_nextPageVolAdjust)) {
        clickTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
    }
    
    if (mouse_nextPageVolAdjust.getPressed()[0] && !button_continue.contains(mouse_nextPageVolAdjust)) {
        clickTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
    }
    
    if (clickTrigger === 2 && !mouse_nextPageVolAdjust.getPressed()[0]) {
        clickTrigger = 0; // resets mouse so new click required to press button
    }
    
    if (!mouse_nextPageVolAdjust.isPressedIn(button_continue) && button_continue.contains(mouse_nextPageVolAdjust) && t > pressingTime && clickTrigger === 1) {
        clickTrigger = 3; // state when button is pressed and released without moving off button
    }
    
    if (clickTrigger === 3 && continue_button_works) {
        clickTrigger = 0; // resets clickTrigger
        continueRoutine = false; // completes routine
    }
    
    // *text_volAdjustShort2* updates
    if (t >= 99999 && text_volAdjustShort2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_volAdjustShort2.tStart = t;  // (not accounting for frame time here)
      text_volAdjustShort2.frameNStart = frameN;  // exact frame index
      
      text_volAdjustShort2.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of volume_adjustComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function volume_adjustRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'volume_adjust' ---
    for (const thisComponent of volume_adjustComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('volume_adjust.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_nextPageVolAdjust.x', mouse_nextPageVolAdjust.x);
    psychoJS.experiment.addData('mouse_nextPageVolAdjust.y', mouse_nextPageVolAdjust.y);
    psychoJS.experiment.addData('mouse_nextPageVolAdjust.leftButton', mouse_nextPageVolAdjust.leftButton);
    psychoJS.experiment.addData('mouse_nextPageVolAdjust.midButton', mouse_nextPageVolAdjust.midButton);
    psychoJS.experiment.addData('mouse_nextPageVolAdjust.rightButton', mouse_nextPageVolAdjust.rightButton);
    psychoJS.experiment.addData('mouse_nextPageVolAdjust.time', mouse_nextPageVolAdjust.time);
    
    psychoJS.experiment.addData('button_highFreq.numClicks', button_highFreq.numClicks);
    psychoJS.experiment.addData('button_highFreq.timesOn', button_highFreq.timesOn);
    psychoJS.experiment.addData('button_highFreq.timesOff', button_highFreq.timesOff);
    psychoJS.experiment.addData('button_lowFreq.numClicks', button_lowFreq.numClicks);
    psychoJS.experiment.addData('button_lowFreq.timesOn', button_lowFreq.timesOn);
    psychoJS.experiment.addData('button_lowFreq.timesOff', button_lowFreq.timesOff);
    psychoJS.experiment.addData('button_continue.numClicks', button_continue.numClicks);
    psychoJS.experiment.addData('button_continue.timesOn', button_continue.timesOn);
    psychoJS.experiment.addData('button_continue.timesOff', button_continue.timesOff);
    // the Routine "volume_adjust" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var welcome_screenComponents;
function welcome_screenRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'welcome_screen' ---
    t = 0;
    welcome_screenClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('welcome_screen.started', globalClock.getTime());
    // reset button_nextPageWelcome to account for continued clicks & clear times on/off
    button_nextPageWelcome.reset()
    clickTrigger = 0;
    routineStartTime = t;
    waitTime = 5;
    
    ////
    // setup some python lists for storing info about the mouse_nextPageWelcome
    // current position of the mouse:
    mouse_nextPageWelcome.x = [];
    mouse_nextPageWelcome.y = [];
    mouse_nextPageWelcome.leftButton = [];
    mouse_nextPageWelcome.midButton = [];
    mouse_nextPageWelcome.rightButton = [];
    mouse_nextPageWelcome.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    welcome_screenComponents = [];
    welcome_screenComponents.push(text_welcomeMessage);
    welcome_screenComponents.push(button_nextPageWelcome);
    welcome_screenComponents.push(mouse_nextPageWelcome);
    
    for (const thisComponent of welcome_screenComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcome_screenRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'welcome_screen' ---
    // get current time
    t = welcome_screenClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_welcomeMessage* updates
    if (t >= 0.0 && text_welcomeMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_welcomeMessage.tStart = t;  // (not accounting for frame time here)
      text_welcomeMessage.frameNStart = frameN;  // exact frame index
      
      text_welcomeMessage.setAutoDraw(true);
    }
    
    
    // *button_nextPageWelcome* updates
    if (t >= 0 && button_nextPageWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_nextPageWelcome.tStart = t;  // (not accounting for frame time here)
      button_nextPageWelcome.frameNStart = frameN;  // exact frame index
      
      button_nextPageWelcome.setAutoDraw(true);
    }
    
    if (button_nextPageWelcome.status === PsychoJS.Status.STARTED) {
      // check whether button_nextPageWelcome has been pressed
      if (button_nextPageWelcome.isClicked) {
        if (!button_nextPageWelcome.wasClicked) {
          // store time of first click
          button_nextPageWelcome.timesOn.push(button_nextPageWelcome.clock.getTime());
          // store time clicked until
          button_nextPageWelcome.timesOff.push(button_nextPageWelcome.clock.getTime());
        } else {
          // update time clicked until;
          button_nextPageWelcome.timesOff[button_nextPageWelcome.timesOff.length - 1] = button_nextPageWelcome.clock.getTime();
        }
        
        // if button_nextPageWelcome is still clicked next frame, it is not a new click
        button_nextPageWelcome.wasClicked = true;
      } else {
        // if button_nextPageWelcome is clicked next frame, it is a new click
        button_nextPageWelcome.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_nextPageWelcome hasn't started / has finished
      button_nextPageWelcome.clock.reset();
      // if button_nextPageWelcome is clicked next frame, it is a new click
      button_nextPageWelcome.wasClicked = false;
    }
    if ((t - routineStartTime) > waitTime) {
    
        // Check for left mouse press within button area
        if (mouse_nextPageWelcome.isPressedIn(button_nextPageWelcome) && clickTrigger === 0 && mouse_nextPageWelcome.getPressed()[0]) {
            clickTrigger = 1; // state when mouse is pressed and held on button
            pressingTime = t;
        }
    
        if (clickTrigger === 1 && !button_nextPageWelcome.contains(mouse_nextPageWelcome)) {
            clickTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    
        if (mouse_nextPageWelcome.getPressed()[0] && !button_nextPageWelcome.contains(mouse_nextPageWelcome)) {
            clickTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
        }
    
        if (clickTrigger === 2 && !mouse_nextPageWelcome.getPressed()[0]) {
            clickTrigger = 0; // resets mouse so new click required to press button
        }
    
        if (!mouse_nextPageWelcome.isPressedIn(button_nextPageWelcome) && button_nextPageWelcome.contains(mouse_nextPageWelcome) && t > pressingTime && clickTrigger === 1) {
            clickTrigger = 3; // state when button is pressed and released without moving off button
        }
    
        if (clickTrigger === 3) {
            clickTrigger = 0; // resets clickTrigger
            continueRoutine = false; // completes routine
        }
    }
    // *mouse_nextPageWelcome* updates
    if (t >= 0.0 && mouse_nextPageWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_nextPageWelcome.tStart = t;  // (not accounting for frame time here)
      mouse_nextPageWelcome.frameNStart = frameN;  // exact frame index
      
      mouse_nextPageWelcome.status = PsychoJS.Status.STARTED;
      mouse_nextPageWelcome.mouseClock.reset();
      prevButtonState = mouse_nextPageWelcome.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_nextPageWelcome.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_nextPageWelcome.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_nextPageWelcome.getPos();
          mouse_nextPageWelcome.x.push(_mouseXYs[0]);
          mouse_nextPageWelcome.y.push(_mouseXYs[1]);
          mouse_nextPageWelcome.leftButton.push(_mouseButtons[0]);
          mouse_nextPageWelcome.midButton.push(_mouseButtons[1]);
          mouse_nextPageWelcome.rightButton.push(_mouseButtons[2]);
          mouse_nextPageWelcome.time.push(mouse_nextPageWelcome.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcome_screenComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcome_screenRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'welcome_screen' ---
    for (const thisComponent of welcome_screenComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('welcome_screen.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_nextPageWelcome.numClicks', button_nextPageWelcome.numClicks);
    psychoJS.experiment.addData('button_nextPageWelcome.timesOn', button_nextPageWelcome.timesOn);
    psychoJS.experiment.addData('button_nextPageWelcome.timesOff', button_nextPageWelcome.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_nextPageWelcome.x', mouse_nextPageWelcome.x);
    psychoJS.experiment.addData('mouse_nextPageWelcome.y', mouse_nextPageWelcome.y);
    psychoJS.experiment.addData('mouse_nextPageWelcome.leftButton', mouse_nextPageWelcome.leftButton);
    psychoJS.experiment.addData('mouse_nextPageWelcome.midButton', mouse_nextPageWelcome.midButton);
    psychoJS.experiment.addData('mouse_nextPageWelcome.rightButton', mouse_nextPageWelcome.rightButton);
    psychoJS.experiment.addData('mouse_nextPageWelcome.time', mouse_nextPageWelcome.time);
    
    // the Routine "welcome_screen" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pre_expComponents;
function pre_expRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_exp' ---
    t = 0;
    pre_expClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('pre_exp.started', globalClock.getTime());
    // reset button_nextPageExp to account for continued clicks & clear times on/off
    button_nextPageExp.reset()
    // setup some python lists for storing info about the mouse_nextPageExp
    // current position of the mouse:
    mouse_nextPageExp.x = [];
    mouse_nextPageExp.y = [];
    mouse_nextPageExp.leftButton = [];
    mouse_nextPageExp.midButton = [];
    mouse_nextPageExp.rightButton = [];
    mouse_nextPageExp.time = [];
    gotValidClick = false; // until a click is received
    clickTrigger = 0;
    routineStartTime = t;
    waitTime = 1;
    // keep track of which components have finished
    pre_expComponents = [];
    pre_expComponents.push(text_preExpMessage);
    pre_expComponents.push(button_nextPageExp);
    pre_expComponents.push(mouse_nextPageExp);
    
    for (const thisComponent of pre_expComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pre_expRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_exp' ---
    // get current time
    t = pre_expClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_preExpMessage* updates
    if (t >= 0.0 && text_preExpMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_preExpMessage.tStart = t;  // (not accounting for frame time here)
      text_preExpMessage.frameNStart = frameN;  // exact frame index
      
      text_preExpMessage.setAutoDraw(true);
    }
    
    
    // *button_nextPageExp* updates
    if (t >= 0 && button_nextPageExp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_nextPageExp.tStart = t;  // (not accounting for frame time here)
      button_nextPageExp.frameNStart = frameN;  // exact frame index
      
      button_nextPageExp.setAutoDraw(true);
    }
    
    if (button_nextPageExp.status === PsychoJS.Status.STARTED) {
      // check whether button_nextPageExp has been pressed
      if (button_nextPageExp.isClicked) {
        if (!button_nextPageExp.wasClicked) {
          // store time of first click
          button_nextPageExp.timesOn.push(button_nextPageExp.clock.getTime());
          // store time clicked until
          button_nextPageExp.timesOff.push(button_nextPageExp.clock.getTime());
        } else {
          // update time clicked until;
          button_nextPageExp.timesOff[button_nextPageExp.timesOff.length - 1] = button_nextPageExp.clock.getTime();
        }
        if (!button_nextPageExp.wasClicked) {
          
        }
        // if button_nextPageExp is still clicked next frame, it is not a new click
        button_nextPageExp.wasClicked = true;
      } else {
        // if button_nextPageExp is clicked next frame, it is a new click
        button_nextPageExp.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_nextPageExp hasn't started / has finished
      button_nextPageExp.clock.reset();
      // if button_nextPageExp is clicked next frame, it is a new click
      button_nextPageExp.wasClicked = false;
    }
    // *mouse_nextPageExp* updates
    if (t >= 0.0 && mouse_nextPageExp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_nextPageExp.tStart = t;  // (not accounting for frame time here)
      mouse_nextPageExp.frameNStart = frameN;  // exact frame index
      
      mouse_nextPageExp.status = PsychoJS.Status.STARTED;
      mouse_nextPageExp.mouseClock.reset();
      prevButtonState = mouse_nextPageExp.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_nextPageExp.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_nextPageExp.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_nextPageExp.getPos();
          mouse_nextPageExp.x.push(_mouseXYs[0]);
          mouse_nextPageExp.y.push(_mouseXYs[1]);
          mouse_nextPageExp.leftButton.push(_mouseButtons[0]);
          mouse_nextPageExp.midButton.push(_mouseButtons[1]);
          mouse_nextPageExp.rightButton.push(_mouseButtons[2]);
          mouse_nextPageExp.time.push(mouse_nextPageExp.mouseClock.getTime());
        }
      }
    }
    if ((t - routineStartTime) > waitTime) {
    
        // Check for left mouse press within button area
        if (mouse_nextPageExp.isPressedIn(button_nextPageExp) && clickTrigger === 0 && mouse_nextPageExp.getPressed()[0]) {
            clickTrigger = 1; // state when mouse is pressed and held on button
            pressingTime = t;
        }
    
        if (clickTrigger === 1 && !button_nextPageExp.contains(mouse_nextPageExp)) {
            clickTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    
        if (mouse_nextPageExp.getPressed()[0] && !button_nextPageExp.contains(mouse_nextPageExp)) {
            clickTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
        }
    
        if (clickTrigger === 2 && !mouse_nextPageExp.getPressed()[0]) {
            clickTrigger = 0; // resets mouse so new click required to press button
        }
    
        if (!mouse_nextPageExp.isPressedIn(button_nextPageExp) && button_nextPageExp.contains(mouse_nextPageExp) && t > pressingTime && clickTrigger === 1) {
            clickTrigger = 3; // state when button is pressed and released without moving off button
        }
    
        if (clickTrigger === 3) {
            clickTrigger = 0; // resets clickTrigger
            continueRoutine = false; // completes routine
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_expComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_expRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_exp' ---
    for (const thisComponent of pre_expComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pre_exp.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_nextPageExp.numClicks', button_nextPageExp.numClicks);
    psychoJS.experiment.addData('button_nextPageExp.timesOn', button_nextPageExp.timesOn);
    psychoJS.experiment.addData('button_nextPageExp.timesOff', button_nextPageExp.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_nextPageExp.x', mouse_nextPageExp.x);
    psychoJS.experiment.addData('mouse_nextPageExp.y', mouse_nextPageExp.y);
    psychoJS.experiment.addData('mouse_nextPageExp.leftButton', mouse_nextPageExp.leftButton);
    psychoJS.experiment.addData('mouse_nextPageExp.midButton', mouse_nextPageExp.midButton);
    psychoJS.experiment.addData('mouse_nextPageExp.rightButton', mouse_nextPageExp.rightButton);
    psychoJS.experiment.addData('mouse_nextPageExp.time', mouse_nextPageExp.time);
    
    // the Routine "pre_exp" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var next_melodyComponents;
function next_melodyRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'next_melody' ---
    t = 0;
    next_melodyClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('next_melody.started', globalClock.getTime());
    // reset button_nextMelody to account for continued clicks & clear times on/off
    button_nextMelody.reset()
    // setup some python lists for storing info about the mouse_nextMelody
    // current position of the mouse:
    mouse_nextMelody.x = [];
    mouse_nextMelody.y = [];
    mouse_nextMelody.leftButton = [];
    mouse_nextMelody.midButton = [];
    mouse_nextMelody.rightButton = [];
    mouse_nextMelody.time = [];
    gotValidClick = false; // until a click is received
    clickTrigger = 0;
    // keep track of which components have finished
    next_melodyComponents = [];
    next_melodyComponents.push(button_nextMelody);
    next_melodyComponents.push(text_nextMelody);
    next_melodyComponents.push(mouse_nextMelody);
    
    for (const thisComponent of next_melodyComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function next_melodyRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'next_melody' ---
    // get current time
    t = next_melodyClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_nextMelody* updates
    if (t >= 0 && button_nextMelody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_nextMelody.tStart = t;  // (not accounting for frame time here)
      button_nextMelody.frameNStart = frameN;  // exact frame index
      
      button_nextMelody.setAutoDraw(true);
    }
    
    if (button_nextMelody.status === PsychoJS.Status.STARTED) {
      // check whether button_nextMelody has been pressed
      if (button_nextMelody.isClicked) {
        if (!button_nextMelody.wasClicked) {
          // store time of first click
          button_nextMelody.timesOn.push(button_nextMelody.clock.getTime());
          // store time clicked until
          button_nextMelody.timesOff.push(button_nextMelody.clock.getTime());
        } else {
          // update time clicked until;
          button_nextMelody.timesOff[button_nextMelody.timesOff.length - 1] = button_nextMelody.clock.getTime();
        }
        if (!button_nextMelody.wasClicked) {
          
        }
        // if button_nextMelody is still clicked next frame, it is not a new click
        button_nextMelody.wasClicked = true;
      } else {
        // if button_nextMelody is clicked next frame, it is a new click
        button_nextMelody.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_nextMelody hasn't started / has finished
      button_nextMelody.clock.reset();
      // if button_nextMelody is clicked next frame, it is a new click
      button_nextMelody.wasClicked = false;
    }
    
    // *text_nextMelody* updates
    if (t >= 0.0 && text_nextMelody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_nextMelody.tStart = t;  // (not accounting for frame time here)
      text_nextMelody.frameNStart = frameN;  // exact frame index
      
      text_nextMelody.setAutoDraw(true);
    }
    
    // *mouse_nextMelody* updates
    if (t >= 0.0 && mouse_nextMelody.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_nextMelody.tStart = t;  // (not accounting for frame time here)
      mouse_nextMelody.frameNStart = frameN;  // exact frame index
      
      mouse_nextMelody.status = PsychoJS.Status.STARTED;
      mouse_nextMelody.mouseClock.reset();
      prevButtonState = mouse_nextMelody.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_nextMelody.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_nextMelody.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_nextMelody.getPos();
          mouse_nextMelody.x.push(_mouseXYs[0]);
          mouse_nextMelody.y.push(_mouseXYs[1]);
          mouse_nextMelody.leftButton.push(_mouseButtons[0]);
          mouse_nextMelody.midButton.push(_mouseButtons[1]);
          mouse_nextMelody.rightButton.push(_mouseButtons[2]);
          mouse_nextMelody.time.push(mouse_nextMelody.mouseClock.getTime());
        }
      }
    }
    // Check for left mouse press within button area
    if (mouse_nextMelody.isPressedIn(button_nextMelody) && clickTrigger === 0 && mouse_nextMelody.getPressed()[0]) {
        clickTrigger = 1; // state when mouse is pressed and held on button
        pressingTime = t;
    }
    
    if (clickTrigger === 1 && !button_nextMelody.contains(mouse_nextMelody)) {
        clickTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
    }
    
    if (mouse_nextMelody.getPressed()[0] && !button_nextMelody.contains(mouse_nextMelody)) {
        clickTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
    }
    
    if (clickTrigger === 2 && !mouse_nextMelody.getPressed()[0]) {
        clickTrigger = 0; // resets mouse so new click required to press button
    }
    
    if (!mouse_nextMelody.isPressedIn(button_nextMelody) && button_nextMelody.contains(mouse_nextMelody) && t > pressingTime && clickTrigger === 1) {
        clickTrigger = 3; // state when button is pressed and released without moving off button
    }
    
    if (clickTrigger === 3) {
        clickTrigger = 0; // resets clickTrigger
        continueRoutine = false; // completes routine
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of next_melodyComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function next_melodyRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'next_melody' ---
    for (const thisComponent of next_melodyComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('next_melody.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_nextMelody.numClicks', button_nextMelody.numClicks);
    psychoJS.experiment.addData('button_nextMelody.timesOn', button_nextMelody.timesOn);
    psychoJS.experiment.addData('button_nextMelody.timesOff', button_nextMelody.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_nextMelody.x', mouse_nextMelody.x);
    psychoJS.experiment.addData('mouse_nextMelody.y', mouse_nextMelody.y);
    psychoJS.experiment.addData('mouse_nextMelody.leftButton', mouse_nextMelody.leftButton);
    psychoJS.experiment.addData('mouse_nextMelody.midButton', mouse_nextMelody.midButton);
    psychoJS.experiment.addData('mouse_nextMelody.rightButton', mouse_nextMelody.rightButton);
    psychoJS.experiment.addData('mouse_nextMelody.time', mouse_nextMelody.time);
    
    // the Routine "next_melody" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var play_audioComponents;
function play_audioRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'play_audio' ---
    t = 0;
    play_audioClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('play_audio.started', globalClock.getTime());
    sound_playback.setValue(stimulus);
    sound_playback.setVolume(1.0);
    // keep track of which components have finished
    play_audioComponents = [];
    play_audioComponents.push(sound_playback);
    
    for (const thisComponent of play_audioComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function play_audioRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'play_audio' ---
    // get current time
    t = play_audioClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_playback
    if (t >= 0.1 && sound_playback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_playback.tStart = t;  // (not accounting for frame time here)
      sound_playback.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_playback.play(); });  // screen flip
      sound_playback.status = PsychoJS.Status.STARTED;
    }
    if (t >= (sound_playback.getDuration() + sound_playback.tStart)     && sound_playback.status === PsychoJS.Status.STARTED) {
      sound_playback.stop();  // stop the sound (if longer than duration)
      sound_playback.status = PsychoJS.Status.FINISHED;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of play_audioComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function play_audioRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'play_audio' ---
    for (const thisComponent of play_audioComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('play_audio.stopped', globalClock.getTime());
    sound_playback.stop();  // ensure sound has stopped at end of Routine
    // the Routine "play_audio" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp_clicks_file_loadingComponents;
function exp_clicks_file_loadingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_clicks_file_loading' ---
    t = 0;
    exp_clicks_file_loadingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp_clicks_file_loading.started', globalClock.getTime());
    expTrialCounter += 1;
    
    if (expTrialCounter === num_exp_melodies || expTrialCounter % nthExpAttentionTrial !== 0) {
        let click_num = Math.floor(Math.random() * 5) + 1;
        curr_click_num[0] = click_num // pushes dummy value to curr_click_num on non-attention trials
        continueRoutine = false;
    } else {
        let click_num = Math.floor(Math.random() * 5) + 1;
        used_click_numbers.push(click_num);
        curr_click_num[0] = click_num;
    }
    // keep track of which components have finished
    exp_clicks_file_loadingComponents = [];
    
    for (const thisComponent of exp_clicks_file_loadingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_clicks_file_loadingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_clicks_file_loading' ---
    // get current time
    t = exp_clicks_file_loadingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_clicks_file_loadingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_clicks_file_loadingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_clicks_file_loading' ---
    for (const thisComponent of exp_clicks_file_loadingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp_clicks_file_loading.stopped', globalClock.getTime());
    // the Routine "exp_clicks_file_loading" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var sound_attentionClicks;
var exp_attention_playbackComponents;
function exp_attention_playbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_attention_playback' ---
    t = 0;
    exp_attention_playbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp_attention_playback.started', globalClock.getTime());
    audioFilePath = 'participant_' + expInfo['participant'] + '_'+ curr_click_num + '_clicks_audio.wav';
    
    sound_attentionClicks = new sound.Sound({
        win: psychoJS.window,
        value: audioFilePath,
        secs: (- 1),
    });
    sound_attentionClicks.setVolume(1.0);
    sound_attentionClicks.tStart = 0.1;
    
    if (expTrialCounter === num_exp_melodies || expTrialCounter % nthExpAttentionTrial !== 0) {
        continueRoutine = false;
    } else {
        psychoJS.experiment.addData('attentionFileName', audioFilePath);
    }
    // keep track of which components have finished
    exp_attention_playbackComponents = [];
    exp_attention_playbackComponents.push(text_expAttentionPrompt);
    
    for (const thisComponent of exp_attention_playbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_attention_playbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_attention_playback' ---
    // get current time
    t = exp_attention_playbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (t >= 0.1 && sound_attentionClicks.status === PsychoJS.Status.NOT_STARTED) {
        sound_attentionClicks.play();
        sound_attentionClicks.status = PsychoJS.Status.STARTED;
    }
    
    // *text_expAttentionPrompt* updates
    if (t >= 0.1 && text_expAttentionPrompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_expAttentionPrompt.tStart = t;  // (not accounting for frame time here)
      text_expAttentionPrompt.frameNStart = frameN;  // exact frame index
      
      text_expAttentionPrompt.setAutoDraw(true);
    }
    
    frameRemains = 0.1 + 5.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_expAttentionPrompt.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_expAttentionPrompt.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_attention_playbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_attention_playbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_attention_playback' ---
    for (const thisComponent of exp_attention_playbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp_attention_playback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp_attention_choiceComponents;
function exp_attention_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_attention_choice' ---
    t = 0;
    exp_attention_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp_attention_choice.started', globalClock.getTime());
    // reset button_expAttention1 to account for continued clicks & clear times on/off
    button_expAttention1.reset()
    // reset button_expAttention2 to account for continued clicks & clear times on/off
    button_expAttention2.reset()
    // reset button_expAttention3 to account for continued clicks & clear times on/off
    button_expAttention3.reset()
    // reset button_expAttention4 to account for continued clicks & clear times on/off
    button_expAttention4.reset()
    // reset button_expAttention5 to account for continued clicks & clear times on/off
    button_expAttention5.reset()
    if (expTrialCounter === num_exp_melodies || expTrialCounter % nthExpAttentionTrial !== 0) {
        button_expAttention1.numClicks = 0;
        button_expAttention2.numClicks = 0;
        button_expAttention3.numClicks = 0;
        button_expAttention4.numClicks = 0;
        button_expAttention5.numClicks = 0;
        continueRoutine = false;
    }
    clickTrigger = 0;
    i = 0;
    buttonChoice = null;
    // setup some python lists for storing info about the mouse_expAttentionChoice
    // current position of the mouse:
    mouse_expAttentionChoice.x = [];
    mouse_expAttentionChoice.y = [];
    mouse_expAttentionChoice.leftButton = [];
    mouse_expAttentionChoice.midButton = [];
    mouse_expAttentionChoice.rightButton = [];
    mouse_expAttentionChoice.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    exp_attention_choiceComponents = [];
    exp_attention_choiceComponents.push(button_expAttention1);
    exp_attention_choiceComponents.push(button_expAttention2);
    exp_attention_choiceComponents.push(button_expAttention3);
    exp_attention_choiceComponents.push(button_expAttention4);
    exp_attention_choiceComponents.push(button_expAttention5);
    exp_attention_choiceComponents.push(text_expBeepNumber);
    exp_attention_choiceComponents.push(mouse_expAttentionChoice);
    
    for (const thisComponent of exp_attention_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_attention_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_attention_choice' ---
    // get current time
    t = exp_attention_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_expAttention1* updates
    if (t >= 0 && button_expAttention1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_expAttention1.tStart = t;  // (not accounting for frame time here)
      button_expAttention1.frameNStart = frameN;  // exact frame index
      
      button_expAttention1.setAutoDraw(true);
    }
    
    if (button_expAttention1.status === PsychoJS.Status.STARTED) {
      // check whether button_expAttention1 has been pressed
      if (button_expAttention1.isClicked) {
        if (!button_expAttention1.wasClicked) {
          // store time of first click
          button_expAttention1.timesOn.push(button_expAttention1.clock.getTime());
          // store time clicked until
          button_expAttention1.timesOff.push(button_expAttention1.clock.getTime());
        } else {
          // update time clicked until;
          button_expAttention1.timesOff[button_expAttention1.timesOff.length - 1] = button_expAttention1.clock.getTime();
        }
        if (!button_expAttention1.wasClicked) {
          
        }
        // if button_expAttention1 is still clicked next frame, it is not a new click
        button_expAttention1.wasClicked = true;
      } else {
        // if button_expAttention1 is clicked next frame, it is a new click
        button_expAttention1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_expAttention1 hasn't started / has finished
      button_expAttention1.clock.reset();
      // if button_expAttention1 is clicked next frame, it is a new click
      button_expAttention1.wasClicked = false;
    }
    
    // *button_expAttention2* updates
    if (t >= 0 && button_expAttention2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_expAttention2.tStart = t;  // (not accounting for frame time here)
      button_expAttention2.frameNStart = frameN;  // exact frame index
      
      button_expAttention2.setAutoDraw(true);
    }
    
    if (button_expAttention2.status === PsychoJS.Status.STARTED) {
      // check whether button_expAttention2 has been pressed
      if (button_expAttention2.isClicked) {
        if (!button_expAttention2.wasClicked) {
          // store time of first click
          button_expAttention2.timesOn.push(button_expAttention2.clock.getTime());
          // store time clicked until
          button_expAttention2.timesOff.push(button_expAttention2.clock.getTime());
        } else {
          // update time clicked until;
          button_expAttention2.timesOff[button_expAttention2.timesOff.length - 1] = button_expAttention2.clock.getTime();
        }
        if (!button_expAttention2.wasClicked) {
          
        }
        // if button_expAttention2 is still clicked next frame, it is not a new click
        button_expAttention2.wasClicked = true;
      } else {
        // if button_expAttention2 is clicked next frame, it is a new click
        button_expAttention2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_expAttention2 hasn't started / has finished
      button_expAttention2.clock.reset();
      // if button_expAttention2 is clicked next frame, it is a new click
      button_expAttention2.wasClicked = false;
    }
    
    // *button_expAttention3* updates
    if (t >= 0 && button_expAttention3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_expAttention3.tStart = t;  // (not accounting for frame time here)
      button_expAttention3.frameNStart = frameN;  // exact frame index
      
      button_expAttention3.setAutoDraw(true);
    }
    
    if (button_expAttention3.status === PsychoJS.Status.STARTED) {
      // check whether button_expAttention3 has been pressed
      if (button_expAttention3.isClicked) {
        if (!button_expAttention3.wasClicked) {
          // store time of first click
          button_expAttention3.timesOn.push(button_expAttention3.clock.getTime());
          // store time clicked until
          button_expAttention3.timesOff.push(button_expAttention3.clock.getTime());
        } else {
          // update time clicked until;
          button_expAttention3.timesOff[button_expAttention3.timesOff.length - 1] = button_expAttention3.clock.getTime();
        }
        if (!button_expAttention3.wasClicked) {
          
        }
        // if button_expAttention3 is still clicked next frame, it is not a new click
        button_expAttention3.wasClicked = true;
      } else {
        // if button_expAttention3 is clicked next frame, it is a new click
        button_expAttention3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_expAttention3 hasn't started / has finished
      button_expAttention3.clock.reset();
      // if button_expAttention3 is clicked next frame, it is a new click
      button_expAttention3.wasClicked = false;
    }
    
    // *button_expAttention4* updates
    if (t >= 0 && button_expAttention4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_expAttention4.tStart = t;  // (not accounting for frame time here)
      button_expAttention4.frameNStart = frameN;  // exact frame index
      
      button_expAttention4.setAutoDraw(true);
    }
    
    if (button_expAttention4.status === PsychoJS.Status.STARTED) {
      // check whether button_expAttention4 has been pressed
      if (button_expAttention4.isClicked) {
        if (!button_expAttention4.wasClicked) {
          // store time of first click
          button_expAttention4.timesOn.push(button_expAttention4.clock.getTime());
          // store time clicked until
          button_expAttention4.timesOff.push(button_expAttention4.clock.getTime());
        } else {
          // update time clicked until;
          button_expAttention4.timesOff[button_expAttention4.timesOff.length - 1] = button_expAttention4.clock.getTime();
        }
        if (!button_expAttention4.wasClicked) {
          
        }
        // if button_expAttention4 is still clicked next frame, it is not a new click
        button_expAttention4.wasClicked = true;
      } else {
        // if button_expAttention4 is clicked next frame, it is a new click
        button_expAttention4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_expAttention4 hasn't started / has finished
      button_expAttention4.clock.reset();
      // if button_expAttention4 is clicked next frame, it is a new click
      button_expAttention4.wasClicked = false;
    }
    
    // *button_expAttention5* updates
    if (t >= 0 && button_expAttention5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_expAttention5.tStart = t;  // (not accounting for frame time here)
      button_expAttention5.frameNStart = frameN;  // exact frame index
      
      button_expAttention5.setAutoDraw(true);
    }
    
    if (button_expAttention5.status === PsychoJS.Status.STARTED) {
      // check whether button_expAttention5 has been pressed
      if (button_expAttention5.isClicked) {
        if (!button_expAttention5.wasClicked) {
          // store time of first click
          button_expAttention5.timesOn.push(button_expAttention5.clock.getTime());
          // store time clicked until
          button_expAttention5.timesOff.push(button_expAttention5.clock.getTime());
        } else {
          // update time clicked until;
          button_expAttention5.timesOff[button_expAttention5.timesOff.length - 1] = button_expAttention5.clock.getTime();
        }
        if (!button_expAttention5.wasClicked) {
          
        }
        // if button_expAttention5 is still clicked next frame, it is not a new click
        button_expAttention5.wasClicked = true;
      } else {
        // if button_expAttention5 is clicked next frame, it is a new click
        button_expAttention5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_expAttention5 hasn't started / has finished
      button_expAttention5.clock.reset();
      // if button_expAttention5 is clicked next frame, it is a new click
      button_expAttention5.wasClicked = false;
    }
    
    // *text_expBeepNumber* updates
    if (t >= 0.0 && text_expBeepNumber.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_expBeepNumber.tStart = t;  // (not accounting for frame time here)
      text_expBeepNumber.frameNStart = frameN;  // exact frame index
      
      text_expBeepNumber.setAutoDraw(true);
    }
    
    // Array to hold all button references
    let buttons = [button_expAttention1, button_expAttention2, button_expAttention3, button_expAttention4, button_expAttention5];
    
    // Check for left mouse press within button area
    for (let i = 0; i < buttons.length; i++) {
        if (mouse_expAttentionChoice.isPressedIn(buttons[i]) && clickTrigger === 0 && mouse_expAttentionChoice.getPressed()[0]) {
            clickTrigger = 1; // state when mouse is pressed and held on button
            pressingTime = t;
            buttonChoice = buttons[i]; // Assign choice based on button mapping
            break; // Exit the loop once a button is pressed
        }
    }
    
    if (clickTrigger === 1) {
        if (!buttonChoice.contains(mouse_expAttentionChoice)) {
            clickTrigger = 2;
            buttonChoice = null; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    }
    
    if (mouse_expAttentionChoice.getPressed()[0] && buttons.every(button => !button.contains(mouse_expAttentionChoice))) {
        clickTrigger = 2;
        buttonChoice = null; // State when mouse is pressed but not on button (prevents off-button presses activating button)
    }
    
    if (clickTrigger === 2 && !mouse_expAttentionChoice.getPressed()[0]) {
        clickTrigger = 0; // resets mouse so new click required to press button
        buttonChoice = null;
    }
    
    if (clickTrigger === 1) {
        if (!mouse_expAttentionChoice.isPressedIn(buttonChoice) && buttonChoice.contains(mouse_expAttentionChoice) && t > pressingTime) {
            clickTrigger = 3; // state when button is pressed and released without moving off button
            buttonChoice.numClicks = 1;
            continueRoutine = false;
        }
    }
        
    // *mouse_expAttentionChoice* updates
    if (t >= 0.0 && mouse_expAttentionChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_expAttentionChoice.tStart = t;  // (not accounting for frame time here)
      mouse_expAttentionChoice.frameNStart = frameN;  // exact frame index
      
      mouse_expAttentionChoice.status = PsychoJS.Status.STARTED;
      mouse_expAttentionChoice.mouseClock.reset();
      prevButtonState = mouse_expAttentionChoice.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_expAttentionChoice.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_expAttentionChoice.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_expAttentionChoice.getPos();
          mouse_expAttentionChoice.x.push(_mouseXYs[0]);
          mouse_expAttentionChoice.y.push(_mouseXYs[1]);
          mouse_expAttentionChoice.leftButton.push(_mouseButtons[0]);
          mouse_expAttentionChoice.midButton.push(_mouseButtons[1]);
          mouse_expAttentionChoice.rightButton.push(_mouseButtons[2]);
          mouse_expAttentionChoice.time.push(mouse_expAttentionChoice.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_attention_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_attention_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_attention_choice' ---
    for (const thisComponent of exp_attention_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp_attention_choice.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_expAttention1.numClicks', button_expAttention1.numClicks);
    psychoJS.experiment.addData('button_expAttention1.timesOn', button_expAttention1.timesOn);
    psychoJS.experiment.addData('button_expAttention1.timesOff', button_expAttention1.timesOff);
    psychoJS.experiment.addData('button_expAttention2.numClicks', button_expAttention2.numClicks);
    psychoJS.experiment.addData('button_expAttention2.timesOn', button_expAttention2.timesOn);
    psychoJS.experiment.addData('button_expAttention2.timesOff', button_expAttention2.timesOff);
    psychoJS.experiment.addData('button_expAttention3.numClicks', button_expAttention3.numClicks);
    psychoJS.experiment.addData('button_expAttention3.timesOn', button_expAttention3.timesOn);
    psychoJS.experiment.addData('button_expAttention3.timesOff', button_expAttention3.timesOff);
    psychoJS.experiment.addData('button_expAttention4.numClicks', button_expAttention4.numClicks);
    psychoJS.experiment.addData('button_expAttention4.timesOn', button_expAttention4.timesOn);
    psychoJS.experiment.addData('button_expAttention4.timesOff', button_expAttention4.timesOff);
    psychoJS.experiment.addData('button_expAttention5.numClicks', button_expAttention5.numClicks);
    psychoJS.experiment.addData('button_expAttention5.timesOn', button_expAttention5.timesOn);
    psychoJS.experiment.addData('button_expAttention5.timesOff', button_expAttention5.timesOff);
    if (clickTrigger === 3 && 
        typeof curr_click_num !== 'undefined' && 
        curr_click_num.toString() !== buttonChoice.text) { 
        // Adjust so checks if attention choice is correct
        failed_attention_trials += 1;
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_expAttentionChoice.x', mouse_expAttentionChoice.x);
    psychoJS.experiment.addData('mouse_expAttentionChoice.y', mouse_expAttentionChoice.y);
    psychoJS.experiment.addData('mouse_expAttentionChoice.leftButton', mouse_expAttentionChoice.leftButton);
    psychoJS.experiment.addData('mouse_expAttentionChoice.midButton', mouse_expAttentionChoice.midButton);
    psychoJS.experiment.addData('mouse_expAttentionChoice.rightButton', mouse_expAttentionChoice.rightButton);
    psychoJS.experiment.addData('mouse_expAttentionChoice.time', mouse_expAttentionChoice.time);
    
    // the Routine "exp_attention_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var exp_attention_resetComponents;
function exp_attention_resetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'exp_attention_reset' ---
    t = 0;
    exp_attention_resetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('exp_attention_reset.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_expAttentionReset
    button_expAttention1.numClicks = 0;
    button_expAttention2.numClicks = 0;
    button_expAttention3.numClicks = 0;
    button_expAttention4.numClicks = 0;
    button_expAttention5.numClicks = 0;
    curr_click_num = []; // empties the array after every trial
    // keep track of which components have finished
    exp_attention_resetComponents = [];
    
    for (const thisComponent of exp_attention_resetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function exp_attention_resetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'exp_attention_reset' ---
    // get current time
    t = exp_attention_resetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of exp_attention_resetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function exp_attention_resetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'exp_attention_reset' ---
    for (const thisComponent of exp_attention_resetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('exp_attention_reset.stopped', globalClock.getTime());
    /*if (failed_attention_trials === 2) {
        window.location.href = "https://app.prolific.com/submissions/complete?cc=C1LH7GW7";
    }*/
    // the Routine "exp_attention_reset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var attention_pass_checkComponents;
function attention_pass_checkRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'attention_pass_check' ---
    t = 0;
    attention_pass_checkClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('attention_pass_check.started', globalClock.getTime());
    if (failed_attention_trials < 2) {
        continueRoutine = false;
    }
    
    // reset button_attentionFail to account for continued clicks & clear times on/off
    button_attentionFail.reset()
    // keep track of which components have finished
    attention_pass_checkComponents = [];
    attention_pass_checkComponents.push(text_attentionFail);
    attention_pass_checkComponents.push(button_attentionFail);
    
    for (const thisComponent of attention_pass_checkComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function attention_pass_checkRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'attention_pass_check' ---
    // get current time
    t = attention_pass_checkClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_attentionFail* updates
    if (t >= 0.0 && text_attentionFail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_attentionFail.tStart = t;  // (not accounting for frame time here)
      text_attentionFail.frameNStart = frameN;  // exact frame index
      
      text_attentionFail.setAutoDraw(true);
    }
    
    
    // *button_attentionFail* updates
    if (t >= 0 && button_attentionFail.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_attentionFail.tStart = t;  // (not accounting for frame time here)
      button_attentionFail.frameNStart = frameN;  // exact frame index
      
      button_attentionFail.setAutoDraw(true);
    }
    
    if (button_attentionFail.status === PsychoJS.Status.STARTED) {
      // check whether button_attentionFail has been pressed
      if (button_attentionFail.isClicked) {
        if (!button_attentionFail.wasClicked) {
          // store time of first click
          button_attentionFail.timesOn.push(button_attentionFail.clock.getTime());
          // store time clicked until
          button_attentionFail.timesOff.push(button_attentionFail.clock.getTime());
        } else {
          // update time clicked until;
          button_attentionFail.timesOff[button_attentionFail.timesOff.length - 1] = button_attentionFail.clock.getTime();
        }
        if (!button_attentionFail.wasClicked) {
          window.location.href = "https://app.prolific.com/submissions/complete?cc=C1LH7GW7";
        }
        // if button_attentionFail is still clicked next frame, it is not a new click
        button_attentionFail.wasClicked = true;
      } else {
        // if button_attentionFail is clicked next frame, it is a new click
        button_attentionFail.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_attentionFail hasn't started / has finished
      button_attentionFail.clock.reset();
      // if button_attentionFail is clicked next frame, it is a new click
      button_attentionFail.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of attention_pass_checkComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attention_pass_checkRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'attention_pass_check' ---
    for (const thisComponent of attention_pass_checkComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('attention_pass_check.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_attentionFail.numClicks', button_attentionFail.numClicks);
    psychoJS.experiment.addData('button_attentionFail.timesOn', button_attentionFail.timesOn);
    psychoJS.experiment.addData('button_attentionFail.timesOff', button_attentionFail.timesOff);
    // the Routine "attention_pass_check" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var pre_testComponents;
function pre_testRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'pre_test' ---
    t = 0;
    pre_testClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('pre_test.started', globalClock.getTime());
    // reset button_nextPageTest to account for continued clicks & clear times on/off
    button_nextPageTest.reset()
    // setup some python lists for storing info about the mouse_nextPageTest
    // current position of the mouse:
    mouse_nextPageTest.x = [];
    mouse_nextPageTest.y = [];
    mouse_nextPageTest.leftButton = [];
    mouse_nextPageTest.midButton = [];
    mouse_nextPageTest.rightButton = [];
    mouse_nextPageTest.time = [];
    gotValidClick = false; // until a click is received
    clickTrigger = 0;
    routineStartTime = t;
    waitTime = 3;
    // keep track of which components have finished
    pre_testComponents = [];
    pre_testComponents.push(text_preTestMessage);
    pre_testComponents.push(button_nextPageTest);
    pre_testComponents.push(mouse_nextPageTest);
    
    for (const thisComponent of pre_testComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function pre_testRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'pre_test' ---
    // get current time
    t = pre_testClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_preTestMessage* updates
    if (t >= 0.0 && text_preTestMessage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_preTestMessage.tStart = t;  // (not accounting for frame time here)
      text_preTestMessage.frameNStart = frameN;  // exact frame index
      
      text_preTestMessage.setAutoDraw(true);
    }
    
    
    // *button_nextPageTest* updates
    if (t >= 0 && button_nextPageTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_nextPageTest.tStart = t;  // (not accounting for frame time here)
      button_nextPageTest.frameNStart = frameN;  // exact frame index
      
      button_nextPageTest.setAutoDraw(true);
    }
    
    if (button_nextPageTest.status === PsychoJS.Status.STARTED) {
      // check whether button_nextPageTest has been pressed
      if (button_nextPageTest.isClicked) {
        if (!button_nextPageTest.wasClicked) {
          // store time of first click
          button_nextPageTest.timesOn.push(button_nextPageTest.clock.getTime());
          // store time clicked until
          button_nextPageTest.timesOff.push(button_nextPageTest.clock.getTime());
        } else {
          // update time clicked until;
          button_nextPageTest.timesOff[button_nextPageTest.timesOff.length - 1] = button_nextPageTest.clock.getTime();
        }
        if (!button_nextPageTest.wasClicked) {
          
        }
        // if button_nextPageTest is still clicked next frame, it is not a new click
        button_nextPageTest.wasClicked = true;
      } else {
        // if button_nextPageTest is clicked next frame, it is a new click
        button_nextPageTest.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_nextPageTest hasn't started / has finished
      button_nextPageTest.clock.reset();
      // if button_nextPageTest is clicked next frame, it is a new click
      button_nextPageTest.wasClicked = false;
    }
    // *mouse_nextPageTest* updates
    if (t >= 0.0 && mouse_nextPageTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_nextPageTest.tStart = t;  // (not accounting for frame time here)
      mouse_nextPageTest.frameNStart = frameN;  // exact frame index
      
      mouse_nextPageTest.status = PsychoJS.Status.STARTED;
      mouse_nextPageTest.mouseClock.reset();
      prevButtonState = mouse_nextPageTest.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_nextPageTest.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_nextPageTest.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_nextPageTest.getPos();
          mouse_nextPageTest.x.push(_mouseXYs[0]);
          mouse_nextPageTest.y.push(_mouseXYs[1]);
          mouse_nextPageTest.leftButton.push(_mouseButtons[0]);
          mouse_nextPageTest.midButton.push(_mouseButtons[1]);
          mouse_nextPageTest.rightButton.push(_mouseButtons[2]);
          mouse_nextPageTest.time.push(mouse_nextPageTest.mouseClock.getTime());
        }
      }
    }
    if ((t - routineStartTime) > waitTime) {
    
        // Check for left mouse press within button area
        if (mouse_nextPageTest.isPressedIn(button_nextPageTest) && clickTrigger === 0 && mouse_nextPageTest.getPressed()[0]) {
            clickTrigger = 1; // state when mouse is pressed and held on button
            pressingTime = t;
        }
    
        if (clickTrigger === 1 && !button_nextPageTest.contains(mouse_nextPageTest)) {
            clickTrigger = 2; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    
        if (mouse_nextPageTest.getPressed()[0] && !button_nextPageTest.contains(mouse_nextPageTest)) {
            clickTrigger = 2; // state when mouse is pressed but not on button (prevents off-button presses activating button)
        }
    
        if (clickTrigger === 2 && !mouse_nextPageTest.getPressed()[0]) {
            clickTrigger = 0; // resets mouse so new click required to press button
        }
    
        if (!mouse_nextPageTest.isPressedIn(button_nextPageTest) && button_nextPageTest.contains(mouse_nextPageTest) && t > pressingTime && clickTrigger === 1) {
            clickTrigger = 3; // state when button is pressed and released without moving off button
        }
    
        if (clickTrigger === 3) {
            clickTrigger = 0; // resets clickTrigger
            continueRoutine = false; // completes routine
        }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_testComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_testRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'pre_test' ---
    for (const thisComponent of pre_testComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('pre_test.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_nextPageTest.numClicks', button_nextPageTest.numClicks);
    psychoJS.experiment.addData('button_nextPageTest.timesOn', button_nextPageTest.timesOn);
    psychoJS.experiment.addData('button_nextPageTest.timesOff', button_nextPageTest.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_nextPageTest.x', mouse_nextPageTest.x);
    psychoJS.experiment.addData('mouse_nextPageTest.y', mouse_nextPageTest.y);
    psychoJS.experiment.addData('mouse_nextPageTest.leftButton', mouse_nextPageTest.leftButton);
    psychoJS.experiment.addData('mouse_nextPageTest.midButton', mouse_nextPageTest.midButton);
    psychoJS.experiment.addData('mouse_nextPageTest.rightButton', mouse_nextPageTest.rightButton);
    psychoJS.experiment.addData('mouse_nextPageTest.time', mouse_nextPageTest.time);
    
    // the Routine "pre_test" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_choiceComponents;
function test_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_choice' ---
    t = 0;
    test_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('test_choice.started', globalClock.getTime());
    // reset button_familiar to account for continued clicks & clear times on/off
    button_familiar.reset()
    // reset button_unfamiliar to account for continued clicks & clear times on/off
    button_unfamiliar.reset()
    // Run 'Begin Routine' code from code_testChoice
    clickTrigger = 0;
    // setup some python lists for storing info about the mouse_testChoice
    // current position of the mouse:
    mouse_testChoice.x = [];
    mouse_testChoice.y = [];
    mouse_testChoice.leftButton = [];
    mouse_testChoice.midButton = [];
    mouse_testChoice.rightButton = [];
    mouse_testChoice.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    test_choiceComponents = [];
    test_choiceComponents.push(button_familiar);
    test_choiceComponents.push(button_unfamiliar);
    test_choiceComponents.push(text_testChoice);
    test_choiceComponents.push(mouse_testChoice);
    
    for (const thisComponent of test_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_choice' ---
    // get current time
    t = test_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_familiar* updates
    if (t >= 0 && button_familiar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_familiar.tStart = t;  // (not accounting for frame time here)
      button_familiar.frameNStart = frameN;  // exact frame index
      
      button_familiar.setAutoDraw(true);
    }
    
    if (button_familiar.status === PsychoJS.Status.STARTED) {
      // check whether button_familiar has been pressed
      if (button_familiar.isClicked) {
        if (!button_familiar.wasClicked) {
          // store time of first click
          button_familiar.timesOn.push(button_familiar.clock.getTime());
          // store time clicked until
          button_familiar.timesOff.push(button_familiar.clock.getTime());
        } else {
          // update time clicked until;
          button_familiar.timesOff[button_familiar.timesOff.length - 1] = button_familiar.clock.getTime();
        }
        if (!button_familiar.wasClicked) {
          
        }
        // if button_familiar is still clicked next frame, it is not a new click
        button_familiar.wasClicked = true;
      } else {
        // if button_familiar is clicked next frame, it is a new click
        button_familiar.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_familiar hasn't started / has finished
      button_familiar.clock.reset();
      // if button_familiar is clicked next frame, it is a new click
      button_familiar.wasClicked = false;
    }
    
    // *button_unfamiliar* updates
    if (t >= 0 && button_unfamiliar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_unfamiliar.tStart = t;  // (not accounting for frame time here)
      button_unfamiliar.frameNStart = frameN;  // exact frame index
      
      button_unfamiliar.setAutoDraw(true);
    }
    
    if (button_unfamiliar.status === PsychoJS.Status.STARTED) {
      // check whether button_unfamiliar has been pressed
      if (button_unfamiliar.isClicked) {
        if (!button_unfamiliar.wasClicked) {
          // store time of first click
          button_unfamiliar.timesOn.push(button_unfamiliar.clock.getTime());
          // store time clicked until
          button_unfamiliar.timesOff.push(button_unfamiliar.clock.getTime());
        } else {
          // update time clicked until;
          button_unfamiliar.timesOff[button_unfamiliar.timesOff.length - 1] = button_unfamiliar.clock.getTime();
        }
        if (!button_unfamiliar.wasClicked) {
          
        }
        // if button_unfamiliar is still clicked next frame, it is not a new click
        button_unfamiliar.wasClicked = true;
      } else {
        // if button_unfamiliar is clicked next frame, it is a new click
        button_unfamiliar.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_unfamiliar hasn't started / has finished
      button_unfamiliar.clock.reset();
      // if button_unfamiliar is clicked next frame, it is a new click
      button_unfamiliar.wasClicked = false;
    }
    
    // *text_testChoice* updates
    if (t >= 0.0 && text_testChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_testChoice.tStart = t;  // (not accounting for frame time here)
      text_testChoice.frameNStart = frameN;  // exact frame index
      
      text_testChoice.setAutoDraw(true);
    }
    
    // Check for left mouse press within button area
    if ((mouse_testChoice.isPressedIn(button_familiar) || mouse_testChoice.isPressedIn(button_unfamiliar)) && clickTrigger === 0 && mouse_testChoice.getPressed()[0]) {
        clickTrigger = 1; // state when mouse is pressed and held on button
        pressingTime = t;
        if (mouse_testChoice.isPressedIn(button_familiar)) {
            buttonChoice = 'a';
        } else if (mouse_testChoice.isPressedIn(button_unfamiliar)) {
            buttonChoice = 'b';
        }
    }
    
    if (clickTrigger === 1 && !button_familiar.contains(mouse_testChoice) && !button_unfamiliar.contains(mouse_testChoice)) {
        clickTrigger = 2;
        buttonChoice = null; // state when mouse is pressed on button (held) and then moved off button (while holding)
    }
    
    if (mouse_testChoice.getPressed()[0] && !button_familiar.contains(mouse_testChoice) && !button_unfamiliar.contains(mouse_testChoice)) {
        clickTrigger = 2;
        buttonChoice = null; // state when mouse is pressed but not on button (prevents off-button presses activating button)
    }
    
    if (clickTrigger === 2 && !mouse_testChoice.getPressed()[0]) {
        clickTrigger = 0; // resets mouse so new click required to press button
    }
    
    if ((!mouse_testChoice.isPressedIn(button_familiar) && button_familiar.contains(mouse_testChoice)) || (!mouse_testChoice.isPressedIn(button_unfamiliar) && button_unfamiliar.contains(mouse_testChoice)) && t > pressingTime && clickTrigger === 1) {
        if (button_familiar.contains(mouse_testChoice) && buttonChoice === 'a') {
            clickTrigger = 3; // state when button is pressed and released without moving off button
            button_familiar.numClicks = 1;
        } else if (button_unfamiliar.contains(mouse_testChoice) && buttonChoice === 'b') {
            clickTrigger = 3; // state when button is pressed and released without moving off button
            button_unfamiliar.numClicks = 1;
        }
    }
    
    if (clickTrigger === 3) {
        clickTrigger = 0; // resets clickTrigger
        buttonChoice = null;
        continueRoutine = false; // completes routine
    }
    
    // *mouse_testChoice* updates
    if (t >= 0.0 && mouse_testChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_testChoice.tStart = t;  // (not accounting for frame time here)
      mouse_testChoice.frameNStart = frameN;  // exact frame index
      
      mouse_testChoice.status = PsychoJS.Status.STARTED;
      mouse_testChoice.mouseClock.reset();
      prevButtonState = mouse_testChoice.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_testChoice.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_testChoice.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_testChoice.getPos();
          mouse_testChoice.x.push(_mouseXYs[0]);
          mouse_testChoice.y.push(_mouseXYs[1]);
          mouse_testChoice.leftButton.push(_mouseButtons[0]);
          mouse_testChoice.midButton.push(_mouseButtons[1]);
          mouse_testChoice.rightButton.push(_mouseButtons[2]);
          mouse_testChoice.time.push(mouse_testChoice.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_choice' ---
    for (const thisComponent of test_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test_choice.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_familiar.numClicks', button_familiar.numClicks);
    psychoJS.experiment.addData('button_familiar.timesOn', button_familiar.timesOn);
    psychoJS.experiment.addData('button_familiar.timesOff', button_familiar.timesOff);
    psychoJS.experiment.addData('button_unfamiliar.numClicks', button_unfamiliar.numClicks);
    psychoJS.experiment.addData('button_unfamiliar.timesOn', button_unfamiliar.timesOn);
    psychoJS.experiment.addData('button_unfamiliar.timesOff', button_unfamiliar.timesOff);
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_testChoice.x', mouse_testChoice.x);
    psychoJS.experiment.addData('mouse_testChoice.y', mouse_testChoice.y);
    psychoJS.experiment.addData('mouse_testChoice.leftButton', mouse_testChoice.leftButton);
    psychoJS.experiment.addData('mouse_testChoice.midButton', mouse_testChoice.midButton);
    psychoJS.experiment.addData('mouse_testChoice.rightButton', mouse_testChoice.rightButton);
    psychoJS.experiment.addData('mouse_testChoice.time', mouse_testChoice.time);
    
    // the Routine "test_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var choice_resetComponents;
function choice_resetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'choice_reset' ---
    t = 0;
    choice_resetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('choice_reset.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_choiceReset
    button_familiar.numClicks = 0;
    button_unfamiliar.numClicks = 0;
    // keep track of which components have finished
    choice_resetComponents = [];
    
    for (const thisComponent of choice_resetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function choice_resetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'choice_reset' ---
    // get current time
    t = choice_resetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of choice_resetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function choice_resetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'choice_reset' ---
    for (const thisComponent of choice_resetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('choice_reset.stopped', globalClock.getTime());
    // the Routine "choice_reset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_clicks_file_loadingComponents;
function test_clicks_file_loadingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_clicks_file_loading' ---
    t = 0;
    test_clicks_file_loadingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    testTrialCounter += 1;
    
    if (testTrialCounter === num_test_melodies || testTrialCounter % nthTestAttentionTrial !== 0) {
        let click_num = Math.floor(Math.random() * 5) + 1;
        curr_click_num[0] = click_num // pushes dummy value to curr_click_num on non-attention trials
        continueRoutine = false;
    } else {
        let click_num = Math.floor(Math.random() * 5) + 1;
        used_click_numbers.push(click_num);
        curr_click_num[0] = click_num;
    }
    // keep track of which components have finished
    test_clicks_file_loadingComponents = [];
    
    for (const thisComponent of test_clicks_file_loadingComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_clicks_file_loadingRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_clicks_file_loading' ---
    // get current time
    t = test_clicks_file_loadingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_clicks_file_loadingComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_clicks_file_loadingRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_clicks_file_loading' ---
    for (const thisComponent of test_clicks_file_loadingComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "test_clicks_file_loading" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_attention_playbackComponents;
function test_attention_playbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_attention_playback' ---
    t = 0;
    test_attention_playbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(5.500000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('test_attention_playback.started', globalClock.getTime());
    audioFilePath = 'participant_' + expInfo['participant'] + '_'+ curr_click_num + '_clicks_audio.wav';
    
    sound_attentionClicks = new sound.Sound({
        win: psychoJS.window,
        value: audioFilePath,
        secs: (- 1),
    });
    sound_attentionClicks.setVolume(1.0);
    sound_attentionClicks.tStart = 0.1;
    
    if (testTrialCounter === num_test_melodies || testTrialCounter % nthTestAttentionTrial !== 0) {
        continueRoutine = false;
    } else {
        psychoJS.experiment.addData('attentionFileName', audioFilePath);
    }
    // keep track of which components have finished
    test_attention_playbackComponents = [];
    test_attention_playbackComponents.push(text_testAttentionPlayback);
    
    for (const thisComponent of test_attention_playbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_attention_playbackRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_attention_playback' ---
    // get current time
    t = test_attention_playbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if (t >= 0.1 && sound_attentionClicks.status === PsychoJS.Status.NOT_STARTED) {
        sound_attentionClicks.play();
        sound_attentionClicks.status = PsychoJS.Status.STARTED;
    }
    //if (!audio_played) {
        //if (sound_attentionClicks && sound_attentionClicks.status !== PsychoJS.Status.STARTED) {
            //sound_attentionClicks.play();
            //audio_played = true;
            //audio_start_time = t; // Record the time when the audio starts playing
            //text_debug.setText("Playing audio...");
        //}
    //}
    
    //if (audio_played && (t - audio_start_time >= audio_duration)) {
        // Audio has played for its full duration, end the routine
        //text_debug.setText("");
        //continueRoutine = false;
    //}
    
    // *text_testAttentionPlayback* updates
    if (t >= 0.1 && text_testAttentionPlayback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_testAttentionPlayback.tStart = t;  // (not accounting for frame time here)
      text_testAttentionPlayback.frameNStart = frameN;  // exact frame index
      
      text_testAttentionPlayback.setAutoDraw(true);
    }
    
    frameRemains = 0.1 + 5.4 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_testAttentionPlayback.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_testAttentionPlayback.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_attention_playbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_attention_playbackRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_attention_playback' ---
    for (const thisComponent of test_attention_playbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test_attention_playback.stopped', globalClock.getTime());
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_attention_choiceComponents;
function test_attention_choiceRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_attention_choice' ---
    t = 0;
    test_attention_choiceClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('test_attention_choice.started', globalClock.getTime());
    // reset button_attention_1 to account for continued clicks & clear times on/off
    button_attention_1.reset()
    // reset button_attention_2 to account for continued clicks & clear times on/off
    button_attention_2.reset()
    // reset button_attention_3 to account for continued clicks & clear times on/off
    button_attention_3.reset()
    // reset button_attention_4 to account for continued clicks & clear times on/off
    button_attention_4.reset()
    // reset button_attention_5 to account for continued clicks & clear times on/off
    button_attention_5.reset()
    if (testTrialCounter === num_test_melodies || testTrialCounter % nthTestAttentionTrial !== 0) {
        button_attention_1.numClicks = 0;
        button_attention_2.numClicks = 0;
        button_attention_3.numClicks = 0;
        button_attention_4.numClicks = 0;
        button_attention_5.numClicks = 0;
        continueRoutine = false;
    }
    clickTrigger = 0;
    i = 0;
    buttonChoice = null;
    // setup some python lists for storing info about the mouse_attentionChoice
    // current position of the mouse:
    mouse_attentionChoice.x = [];
    mouse_attentionChoice.y = [];
    mouse_attentionChoice.leftButton = [];
    mouse_attentionChoice.midButton = [];
    mouse_attentionChoice.rightButton = [];
    mouse_attentionChoice.time = [];
    gotValidClick = false; // until a click is received
    // keep track of which components have finished
    test_attention_choiceComponents = [];
    test_attention_choiceComponents.push(button_attention_1);
    test_attention_choiceComponents.push(button_attention_2);
    test_attention_choiceComponents.push(button_attention_3);
    test_attention_choiceComponents.push(button_attention_4);
    test_attention_choiceComponents.push(button_attention_5);
    test_attention_choiceComponents.push(text_beepNumber);
    test_attention_choiceComponents.push(mouse_attentionChoice);
    
    for (const thisComponent of test_attention_choiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_attention_choiceRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_attention_choice' ---
    // get current time
    t = test_attention_choiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *button_attention_1* updates
    if (t >= 0 && button_attention_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_attention_1.tStart = t;  // (not accounting for frame time here)
      button_attention_1.frameNStart = frameN;  // exact frame index
      
      button_attention_1.setAutoDraw(true);
    }
    
    if (button_attention_1.status === PsychoJS.Status.STARTED) {
      // check whether button_attention_1 has been pressed
      if (button_attention_1.isClicked) {
        if (!button_attention_1.wasClicked) {
          // store time of first click
          button_attention_1.timesOn.push(button_attention_1.clock.getTime());
          // store time clicked until
          button_attention_1.timesOff.push(button_attention_1.clock.getTime());
        } else {
          // update time clicked until;
          button_attention_1.timesOff[button_attention_1.timesOff.length - 1] = button_attention_1.clock.getTime();
        }
        if (!button_attention_1.wasClicked) {
          
        }
        // if button_attention_1 is still clicked next frame, it is not a new click
        button_attention_1.wasClicked = true;
      } else {
        // if button_attention_1 is clicked next frame, it is a new click
        button_attention_1.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_attention_1 hasn't started / has finished
      button_attention_1.clock.reset();
      // if button_attention_1 is clicked next frame, it is a new click
      button_attention_1.wasClicked = false;
    }
    
    // *button_attention_2* updates
    if (t >= 0 && button_attention_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_attention_2.tStart = t;  // (not accounting for frame time here)
      button_attention_2.frameNStart = frameN;  // exact frame index
      
      button_attention_2.setAutoDraw(true);
    }
    
    if (button_attention_2.status === PsychoJS.Status.STARTED) {
      // check whether button_attention_2 has been pressed
      if (button_attention_2.isClicked) {
        if (!button_attention_2.wasClicked) {
          // store time of first click
          button_attention_2.timesOn.push(button_attention_2.clock.getTime());
          // store time clicked until
          button_attention_2.timesOff.push(button_attention_2.clock.getTime());
        } else {
          // update time clicked until;
          button_attention_2.timesOff[button_attention_2.timesOff.length - 1] = button_attention_2.clock.getTime();
        }
        if (!button_attention_2.wasClicked) {
          
        }
        // if button_attention_2 is still clicked next frame, it is not a new click
        button_attention_2.wasClicked = true;
      } else {
        // if button_attention_2 is clicked next frame, it is a new click
        button_attention_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_attention_2 hasn't started / has finished
      button_attention_2.clock.reset();
      // if button_attention_2 is clicked next frame, it is a new click
      button_attention_2.wasClicked = false;
    }
    
    // *button_attention_3* updates
    if (t >= 0 && button_attention_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_attention_3.tStart = t;  // (not accounting for frame time here)
      button_attention_3.frameNStart = frameN;  // exact frame index
      
      button_attention_3.setAutoDraw(true);
    }
    
    if (button_attention_3.status === PsychoJS.Status.STARTED) {
      // check whether button_attention_3 has been pressed
      if (button_attention_3.isClicked) {
        if (!button_attention_3.wasClicked) {
          // store time of first click
          button_attention_3.timesOn.push(button_attention_3.clock.getTime());
          // store time clicked until
          button_attention_3.timesOff.push(button_attention_3.clock.getTime());
        } else {
          // update time clicked until;
          button_attention_3.timesOff[button_attention_3.timesOff.length - 1] = button_attention_3.clock.getTime();
        }
        if (!button_attention_3.wasClicked) {
          
        }
        // if button_attention_3 is still clicked next frame, it is not a new click
        button_attention_3.wasClicked = true;
      } else {
        // if button_attention_3 is clicked next frame, it is a new click
        button_attention_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_attention_3 hasn't started / has finished
      button_attention_3.clock.reset();
      // if button_attention_3 is clicked next frame, it is a new click
      button_attention_3.wasClicked = false;
    }
    
    // *button_attention_4* updates
    if (t >= 0 && button_attention_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_attention_4.tStart = t;  // (not accounting for frame time here)
      button_attention_4.frameNStart = frameN;  // exact frame index
      
      button_attention_4.setAutoDraw(true);
    }
    
    if (button_attention_4.status === PsychoJS.Status.STARTED) {
      // check whether button_attention_4 has been pressed
      if (button_attention_4.isClicked) {
        if (!button_attention_4.wasClicked) {
          // store time of first click
          button_attention_4.timesOn.push(button_attention_4.clock.getTime());
          // store time clicked until
          button_attention_4.timesOff.push(button_attention_4.clock.getTime());
        } else {
          // update time clicked until;
          button_attention_4.timesOff[button_attention_4.timesOff.length - 1] = button_attention_4.clock.getTime();
        }
        if (!button_attention_4.wasClicked) {
          
        }
        // if button_attention_4 is still clicked next frame, it is not a new click
        button_attention_4.wasClicked = true;
      } else {
        // if button_attention_4 is clicked next frame, it is a new click
        button_attention_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_attention_4 hasn't started / has finished
      button_attention_4.clock.reset();
      // if button_attention_4 is clicked next frame, it is a new click
      button_attention_4.wasClicked = false;
    }
    
    // *button_attention_5* updates
    if (t >= 0 && button_attention_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_attention_5.tStart = t;  // (not accounting for frame time here)
      button_attention_5.frameNStart = frameN;  // exact frame index
      
      button_attention_5.setAutoDraw(true);
    }
    
    if (button_attention_5.status === PsychoJS.Status.STARTED) {
      // check whether button_attention_5 has been pressed
      if (button_attention_5.isClicked) {
        if (!button_attention_5.wasClicked) {
          // store time of first click
          button_attention_5.timesOn.push(button_attention_5.clock.getTime());
          // store time clicked until
          button_attention_5.timesOff.push(button_attention_5.clock.getTime());
        } else {
          // update time clicked until;
          button_attention_5.timesOff[button_attention_5.timesOff.length - 1] = button_attention_5.clock.getTime();
        }
        if (!button_attention_5.wasClicked) {
          
        }
        // if button_attention_5 is still clicked next frame, it is not a new click
        button_attention_5.wasClicked = true;
      } else {
        // if button_attention_5 is clicked next frame, it is a new click
        button_attention_5.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_attention_5 hasn't started / has finished
      button_attention_5.clock.reset();
      // if button_attention_5 is clicked next frame, it is a new click
      button_attention_5.wasClicked = false;
    }
    
    // *text_beepNumber* updates
    if (t >= 0.0 && text_beepNumber.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_beepNumber.tStart = t;  // (not accounting for frame time here)
      text_beepNumber.frameNStart = frameN;  // exact frame index
      
      text_beepNumber.setAutoDraw(true);
    }
    
    // Array to hold all button references
    let buttons = [button_attention_1, button_attention_2, button_attention_3, button_attention_4, button_attention_5];
    
    // Check for left mouse press within button area
    for (let i = 0; i < buttons.length; i++) {
        if (mouse_attentionChoice.isPressedIn(buttons[i]) && clickTrigger === 0 && mouse_attentionChoice.getPressed()[0]) {
            clickTrigger = 1; // state when mouse is pressed and held on button
            pressingTime = t;
            buttonChoice = buttons[i]; // Assign choice based on button mapping
            break; // Exit the loop once a button is pressed
        }
    }
    
    if (clickTrigger === 1) {
        if (!buttonChoice.contains(mouse_attentionChoice) && !buttonChoice.contains(mouse_attentionChoice)) {
            clickTrigger = 2;
            buttonChoice = null; // state when mouse is pressed on button (held) and then moved off button (while holding)
        }
    }
    
    if (mouse_attentionChoice.getPressed()[0] && buttons.every(button => !button.contains(mouse_attentionChoice))) {
        clickTrigger = 2;
        buttonChoice = null; // State when mouse is pressed but not on button (prevents off-button presses activating button)
    }
    
    if (clickTrigger === 2 && !mouse_attentionChoice.getPressed()[0]) {
        clickTrigger = 0; // resets mouse so new click required to press button
        buttonChoice = null;
    }
    
    if (clickTrigger === 1) {
        if (!mouse_attentionChoice.isPressedIn(buttonChoice) && buttonChoice.contains(mouse_attentionChoice) && t > pressingTime) {
            clickTrigger = 3; // state when button is pressed and released without moving off button
            buttonChoice.numClicks = 1;
            continueRoutine = false;
        }
    }
        
    // *mouse_attentionChoice* updates
    if (t >= 0.0 && mouse_attentionChoice.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_attentionChoice.tStart = t;  // (not accounting for frame time here)
      mouse_attentionChoice.frameNStart = frameN;  // exact frame index
      
      mouse_attentionChoice.status = PsychoJS.Status.STARTED;
      mouse_attentionChoice.mouseClock.reset();
      prevButtonState = mouse_attentionChoice.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_attentionChoice.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_attentionChoice.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          _mouseXYs = mouse_attentionChoice.getPos();
          mouse_attentionChoice.x.push(_mouseXYs[0]);
          mouse_attentionChoice.y.push(_mouseXYs[1]);
          mouse_attentionChoice.leftButton.push(_mouseButtons[0]);
          mouse_attentionChoice.midButton.push(_mouseButtons[1]);
          mouse_attentionChoice.rightButton.push(_mouseButtons[2]);
          mouse_attentionChoice.time.push(mouse_attentionChoice.mouseClock.getTime());
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_attention_choiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_attention_choiceRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_attention_choice' ---
    for (const thisComponent of test_attention_choiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test_attention_choice.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_attention_1.numClicks', button_attention_1.numClicks);
    psychoJS.experiment.addData('button_attention_1.timesOn', button_attention_1.timesOn);
    psychoJS.experiment.addData('button_attention_1.timesOff', button_attention_1.timesOff);
    psychoJS.experiment.addData('button_attention_2.numClicks', button_attention_2.numClicks);
    psychoJS.experiment.addData('button_attention_2.timesOn', button_attention_2.timesOn);
    psychoJS.experiment.addData('button_attention_2.timesOff', button_attention_2.timesOff);
    psychoJS.experiment.addData('button_attention_3.numClicks', button_attention_3.numClicks);
    psychoJS.experiment.addData('button_attention_3.timesOn', button_attention_3.timesOn);
    psychoJS.experiment.addData('button_attention_3.timesOff', button_attention_3.timesOff);
    psychoJS.experiment.addData('button_attention_4.numClicks', button_attention_4.numClicks);
    psychoJS.experiment.addData('button_attention_4.timesOn', button_attention_4.timesOn);
    psychoJS.experiment.addData('button_attention_4.timesOff', button_attention_4.timesOff);
    psychoJS.experiment.addData('button_attention_5.numClicks', button_attention_5.numClicks);
    psychoJS.experiment.addData('button_attention_5.timesOn', button_attention_5.timesOn);
    psychoJS.experiment.addData('button_attention_5.timesOff', button_attention_5.timesOff);
    if (clickTrigger === 3 && 
        typeof curr_click_num !== 'undefined' && 
        curr_click_num.toString() !== buttonChoice.text) { 
        // Adjust so checks if attention choice is correct
            failed_attention_trials += 1;
    }
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_attentionChoice.x', mouse_attentionChoice.x);
    psychoJS.experiment.addData('mouse_attentionChoice.y', mouse_attentionChoice.y);
    psychoJS.experiment.addData('mouse_attentionChoice.leftButton', mouse_attentionChoice.leftButton);
    psychoJS.experiment.addData('mouse_attentionChoice.midButton', mouse_attentionChoice.midButton);
    psychoJS.experiment.addData('mouse_attentionChoice.rightButton', mouse_attentionChoice.rightButton);
    psychoJS.experiment.addData('mouse_attentionChoice.time', mouse_attentionChoice.time);
    
    // the Routine "test_attention_choice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var test_attention_resetComponents;
function test_attention_resetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'test_attention_reset' ---
    t = 0;
    test_attention_resetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('test_attention_reset.started', globalClock.getTime());
    // Run 'Begin Routine' code from code_testAttentionReset
    button_attention_1.numClicks = 0;
    button_attention_2.numClicks = 0;
    button_attention_3.numClicks = 0;
    button_attention_4.numClicks = 0;
    button_attention_5.numClicks = 0;
    curr_click_num = []; // empties the array after every trial
    // keep track of which components have finished
    test_attention_resetComponents = [];
    
    for (const thisComponent of test_attention_resetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function test_attention_resetRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'test_attention_reset' ---
    // get current time
    t = test_attention_resetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of test_attention_resetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function test_attention_resetRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'test_attention_reset' ---
    for (const thisComponent of test_attention_resetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('test_attention_reset.stopped', globalClock.getTime());
    // the Routine "test_attention_reset" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var experimentComplete;
var send_expt_dataComponents;
function send_expt_dataRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'send_expt_data' ---
    t = 0;
    send_expt_dataClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('send_expt_data.started', globalClock.getTime());
    experimentComplete = true;
    
    function flattenObject(obj, prefix = '') {
        const flattened = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                const newKey = prefix ? `${prefix}.${key}` : key; // Add prefix for nested keys
                const value = obj[key];
    
                if (Array.isArray(value)) {
                    // Convert arrays to a string separated by commas
                    flattened[newKey] = value.join(','); // Optionally change this delimiter if needed
                } else if (typeof value === 'object' && value !== null) {
                    // Recursively flatten nested objects
                    Object.assign(flattened, flattenObject(value, newKey));
                } else {
                    // Add primitive values directly
                    flattened[newKey] = value;
                }
            }
        }
        return flattened;
    }
    
    function trialsDataToCSV(trialsData, delimiter = ',') {
        if (!trialsData || trialsData.length === 0) {
            console.warn('No trial data available to save.');
            return '';
        }
    
        // Flatten all trial objects
        const flattenedTrials = trialsData.map(trial => flattenObject(trial));
    
        // Get all unique headers (keys) from the flattened data
        const headers = Array.from(new Set(flattenedTrials.flatMap(trial => Object.keys(trial))));
    
        // Create the CSV header row
        let csv = headers.join(delimiter) + '\n';
    
        // Add each trial's data as a row
        flattenedTrials.forEach(trial => {
            const row = headers.map(header => {
                const value = trial[header] !== undefined ? trial[header] : '';
                // If value is a string, escape the delimiter (optional but useful)
                return typeof value === 'string' && value.includes(delimiter)
                    ? `"${value}"`
                    : value;
            });
            csv += row.join(delimiter) + '\n';
        });
    
        return csv;
    }
    
    const csvData = trialsDataToCSV(psychoJS.experiment._trialsData, '\t');
    
    // Disable downloading results to browser
    psychoJS._saveResults = 0;
      
    // Generate filename for results
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '_participant_' + paddedParticipantN + '.csv';
    
    // Send data to OSF via DataPipe
    console.log('Saving data...');
    fetch('https://pipe.jspsych.org/api/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({
            experimentID: 'cs5h7zOkFk24', // ⭑ UPDATE WITH YOUR DATAPIPE EXPERIMENT ID ⭑
            filename: filename,
            data: csvData,
        }),
    }).then(response => response.json())
      .then(data => {
          // Log response
          console.log('Response from server:', data);
      })
      .catch(error => {
          // Handle any errors
          console.error('Error sending data:', error);
      });
    // keep track of which components have finished
    send_expt_dataComponents = [];
    
    for (const thisComponent of send_expt_dataComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function send_expt_dataRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'send_expt_data' ---
    // get current time
    t = send_expt_dataClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of send_expt_dataComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function send_expt_dataRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'send_expt_data' ---
    for (const thisComponent of send_expt_dataComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('send_expt_data.stopped', globalClock.getTime());
    // the Routine "send_expt_data" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var click_redirectComponents;
function click_redirectRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'click_redirect' ---
    t = 0;
    click_redirectClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('click_redirect.started', globalClock.getTime());
    // reset button_redirectClick to account for continued clicks & clear times on/off
    button_redirectClick.reset()
    // keep track of which components have finished
    click_redirectComponents = [];
    click_redirectComponents.push(text_dataWait);
    click_redirectComponents.push(text_redirectPrompt);
    click_redirectComponents.push(button_redirectClick);
    
    for (const thisComponent of click_redirectComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function click_redirectRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'click_redirect' ---
    // get current time
    t = click_redirectClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_dataWait* updates
    if (t >= 0.0 && text_dataWait.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_dataWait.tStart = t;  // (not accounting for frame time here)
      text_dataWait.frameNStart = frameN;  // exact frame index
      
      text_dataWait.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_dataWait.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_dataWait.setAutoDraw(false);
    }
    
    
    // *text_redirectPrompt* updates
    if (t >= 5.0 && text_redirectPrompt.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_redirectPrompt.tStart = t;  // (not accounting for frame time here)
      text_redirectPrompt.frameNStart = frameN;  // exact frame index
      
      text_redirectPrompt.setAutoDraw(true);
    }
    
    
    // *button_redirectClick* updates
    if (t >= 5.0 && button_redirectClick.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_redirectClick.tStart = t;  // (not accounting for frame time here)
      button_redirectClick.frameNStart = frameN;  // exact frame index
      
      button_redirectClick.setAutoDraw(true);
    }
    
    if (button_redirectClick.status === PsychoJS.Status.STARTED) {
      // check whether button_redirectClick has been pressed
      if (button_redirectClick.isClicked) {
        if (!button_redirectClick.wasClicked) {
          // store time of first click
          button_redirectClick.timesOn.push(button_redirectClick.clock.getTime());
          // store time clicked until
          button_redirectClick.timesOff.push(button_redirectClick.clock.getTime());
        } else {
          // update time clicked until;
          button_redirectClick.timesOff[button_redirectClick.timesOff.length - 1] = button_redirectClick.clock.getTime();
        }
        if (!button_redirectClick.wasClicked) {
          window.location.href = "https://app.prolific.com/submissions/complete?cc=CPRPTY9P";
        }
        // if button_redirectClick is still clicked next frame, it is not a new click
        button_redirectClick.wasClicked = true;
      } else {
        // if button_redirectClick is clicked next frame, it is a new click
        button_redirectClick.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_redirectClick hasn't started / has finished
      button_redirectClick.clock.reset();
      // if button_redirectClick is clicked next frame, it is a new click
      button_redirectClick.wasClicked = false;
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of click_redirectComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function click_redirectRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'click_redirect' ---
    for (const thisComponent of click_redirectComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('click_redirect.stopped', globalClock.getTime());
    psychoJS.experiment.addData('button_redirectClick.numClicks', button_redirectClick.numClicks);
    psychoJS.experiment.addData('button_redirectClick.timesOn', button_redirectClick.timesOn);
    psychoJS.experiment.addData('button_redirectClick.timesOff', button_redirectClick.timesOff);
    // the Routine "click_redirect" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var end_scrapComponents;
function end_scrapRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'end_scrap' ---
    t = 0;
    end_scrapClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData('end_scrap.started', globalClock.getTime());
    // keep track of which components have finished
    end_scrapComponents = [];
    end_scrapComponents.push(text_endScrap);
    
    for (const thisComponent of end_scrapComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function end_scrapRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'end_scrap' ---
    // get current time
    t = end_scrapClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_endScrap* updates
    if (t >= 0.0 && text_endScrap.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_endScrap.tStart = t;  // (not accounting for frame time here)
      text_endScrap.frameNStart = frameN;  // exact frame index
      
      text_endScrap.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of end_scrapComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function end_scrapRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'end_scrap' ---
    for (const thisComponent of end_scrapComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('end_scrap.stopped', globalClock.getTime());
    // the Routine "end_scrap" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  //if (experimentComplete === true) {
  //    psychoJS.shelf.addIntegerValue({key: ['participant_counter_mono'], delta: 1})
  //} // Check expt works without counter.
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}

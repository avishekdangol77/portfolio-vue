// APA
import apa from '@/assets/images/projects/apa/thumbnail.png'
import apaRegistration from '@/assets/images/projects/apa/registration.png'
import apaDashboard from '@/assets/images/projects/apa/dashboard.png'
import apaCarousel from '@/assets/images/projects/apa/carousel.png'
import apaParticipants from '@/assets/images/projects/apa/participants.png'
import apaEmail from '@/assets/images/projects/apa/email.png'
import apaUsers from '@/assets/images/projects/apa/users.png'

// Workzone
import wz from '@/assets/images/projects/wz/thumbnail.png'
import wzHome from '@/assets/images/projects/wz/home.png'
import wzScreenshots from '@/assets/images/projects/wz/screenshots.png'
import wzReports from '@/assets/images/projects/wz/reports.png'
import wzCloudStorage from '@/assets/images/projects/wz/cloudStorage.png'
import wzAccounts from '@/assets/images/projects/wz/accounts.png'
import wzChat from '@/assets/images/projects/wz/chat.png'
import wzCRM from '@/assets/images/projects/wz/crm.png'
import wzTour from '@/assets/images/projects/wz/tour.png'
import wzLocalisation from '@/assets/images/projects/wz/localisation.png'

// GEC
import gec from '@/assets/images/projects/gec/thumbnail.png'
import gecAiAssistant from '@/assets/images/projects/gec/AI-assistant.png'
import gecBugReport from '@/assets/images/projects/gec/bug-report.png'
import gecLessonReport from '@/assets/images/projects/gec/lesson-report.png'
import gecLesson from '@/assets/images/projects/gec/lesson.png'
import gecRealtimeChat from '@/assets/images/projects/gec/realtime-chat.png'
import gecStudentReport from '@/assets/images/projects/gec/student-report.png'

// DatablockAI
import dbai from '@/assets/images/projects/dbai/thumbnail.png'
import dbaiHomepage from '@/assets/images/projects/dbai/homepage.png'
import dbaiInteractiveWorkflowTest from '@/assets/images/projects/dbai/interactive-workflow-test.png'
import dbaiResponseExplorerDetail from '@/assets/images/projects/dbai/response-explorer-detail.png'
import dbaiResponseExplorer from '@/assets/images/projects/dbai/response-explorer.png'
import dbaiUpdateNode from '@/assets/images/projects/dbai/update-node.png'

// Skin Cancer Detection
import scd from '@/assets/images/projects/scd/ui.png'
import scdAttentionMap from '@/assets/images/projects/scd/attention-map.png'
import scdGradCamSHAP from '@/assets/images/projects/scd/gradcam-shap.png'
import scdInfluenceFunctions from '@/assets/images/projects/scd/influence-functions.png'
import scdROCAUC from '@/assets/images/projects/scd/roc-auc.png'
import scdConfusionMatrix from '@/assets/images/projects/scd/confusion-matrix.png'
import scdTrainTestAcc from '@/assets/images/projects/scd/train-test-accuracy.png'
import scdAccuracy from '@/assets/images/projects/scd/accuracy.png'
import scdLLMReport from '@/assets/images/projects/scd/llm-report.png'

import type { ProjectSnapshot } from './types'

const skinCancerDetection: ProjectSnapshot = {
  thumbnail: scd,
  snapshots: [
    {
      src: scd,
      caption: 'Landing page',
    },
    {
      src: scdAttentionMap,
      caption: 'Attention map showing areas of focus'
    },
    {
      src: scdGradCamSHAP,
      caption: 'Grad-CAM and SHAP visualisation'
    },
    {
      src: scdInfluenceFunctions,
      caption: 'Influence Functions for model interpretability'
    },
    {
      src: scdLLMReport,
      caption: 'LLM Report - Interpretation of Explainability AI (XAI) in natural language'
    },
    {
      src: scdTrainTestAcc,
      caption: 'Train-Test Accuracy of the model over the epochs'
    },
    {
      src: scdAccuracy,
      caption: 'Training, Validation and Testing accuracy of the model'
    },
    {
      src: scdConfusionMatrix,
      caption: 'Confusion Matrix of the model'
    },
    {
      src: scdROCAUC,
      caption: 'ROC AUC Score comparison of various models'
    },
  ],
}

const asianPopulationAssociation: ProjectSnapshot = {
  thumbnail: apa,
  snapshots: [
    {
      src: apa,
      caption: 'Landing page',
    },
    {
      src: apaRegistration,
      caption: 'Registration page',
    },
    {
      src: apaDashboard,
      caption: 'Dashboard',
    },
    {
      src: apaCarousel,
      caption: 'Dashboard - Carousel',
    },
    {
      src: apaParticipants,
      caption: 'Dashboard - Participants',
    },
    {
      src: apaEmail,
      caption: 'Dashboard - Email Editor',
    },
    {
      src: apaUsers,
      caption: 'Dashboard - User Management',
    },
  ],
}

const workzone: ProjectSnapshot = {
  thumbnail: wz,
  snapshots: [
    {
      src: wz,
      caption: 'Landing page',
    },
    {
      src: wzHome,
      caption: 'Homepage',
    },
    {
      src: wzTour,
      caption: 'Full website tour',
    },
    {
      src: wzScreenshots,
      caption: 'Screenshots captured from tracker app',
    },
    {
      src: wzReports,
      caption: 'Work reports',
    },
    {
      src: wzCloudStorage,
      caption: 'Cloud storage - file manager',
    },
    {
      src: wzCRM,
      caption: 'Client relationship management',
    },
    {
      src: wzAccounts,
      caption: 'Accounts - Salary management with fund transfers, withdrawals and account-to-account sharings',
    },
    {
      src: wzChat,
      caption: 'Chat Microservice - private chat, group chat and audio / video calls',
    },
    {
      src: wzLocalisation,
      caption: 'Localisation',
    },
  ],
}

const globalEnglishCampus: ProjectSnapshot = {
  thumbnail: gec,
  snapshots: [
    {
      src: gec,
      caption: 'Landing page',
    },
    {
      src: gecLesson,
      caption: 'Lesson - interactive learning content',
    },
    {
      src: gecLessonReport,
      caption: 'Lesson report - progress and analytics',
    },
    {
      src: gecStudentReport,
      caption: 'Student report - performance overview',
    },
    {
      src: gecRealtimeChat,
      caption: 'Realtime chat',
    },
    {
      src: gecBugReport,
      caption: 'Bug report - issue reporting and tracking',
    },
    {
      src: gecAiAssistant,
      caption: 'AI Assistant - tutoring support',
    },
  ],
}

const datablockAi: ProjectSnapshot = {
  thumbnail: dbai,
  snapshots: [
    {
      src: dbai,
      caption: 'Landing page',
    },
    {
      src: dbaiHomepage,
      caption: 'Homepage',
    },
    {
      src: dbaiUpdateNode,
      caption: 'Update Node - manage AI workflows',
    },
    {
      src: dbaiInteractiveWorkflowTest,
      caption: 'Interactive chat to test the AI workflow',
    },
    {
      src: dbaiResponseExplorer,
      caption: 'Response Explorer - view AI responses',
    },
    {
      src: dbaiResponseExplorerDetail,
      caption: 'Response Explorer Detail - view and manage AI responses',
    },
  ],
}

export default {
  'asian-population-association': asianPopulationAssociation,
  'global-english-campus': globalEnglishCampus,
  'datablock-ai': datablockAi,
  workzone,
  'skin-cancer-detection': skinCancerDetection,
}

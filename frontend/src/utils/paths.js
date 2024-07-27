import { APP_BASE, API_BASE } from "./constants";

export default {
  home: () => {
    return `${APP_BASE}/`;
  },
  login: (noTry = false) => {
    return `${APP_BASE}/login${noTry ? "?nt=1" : ""}`;
  },
  onboarding: {
    home: () => {
      return `${APP_BASE}/onboarding`;
    },
    survey: () => {
      return `${APP_BASE}/onboarding/survey`;
    },
    llmPreference: () => {
      return `${APP_BASE}/onboarding/llm-preference`;
    },
    embeddingPreference: () => {
      return `${APP_BASE}/onboarding/embedding-preference`;
    },
    vectorDatabase: () => {
      return `${APP_BASE}/onboarding/vector-database`;
    },
    userSetup: () => {
      return `${APP_BASE}/onboarding/user-setup`;
    },
    dataHandling: () => {
      return `${APP_BASE}/onboarding/data-handling`;
    },
    createWorkspace: () => {
      return `${APP_BASE}/onboarding/create-workspace`;
    },
  },
  github: () => {
    return "https://github.com/Mintplex-Labs/anything-llm";
  },
  discord: () => {
    return "https://discord.com/invite/6UyHPeGZAC";
  },
  docs: () => {
    return "https://docs.anythingllm.com";
  },
  mailToMintplex: () => {
    return "mailto:team@mintplexlabs.com";
  },
  hosting: () => {
    return "https://my.mintplexlabs.com/aio-checkout?product=anythingllm";
  },
  workspace: {
    chat: (slug) => {
      return `${APP_BASE}/workspace/${slug}`;
    },
    settings: {
      generalAppearance: (slug) => {
        return `${APP_BASE}/workspace/${slug}/settings/general-appearance`;
      },
      chatSettings: (slug) => {
        return `${APP_BASE}/workspace/${slug}/settings/chat-settings`;
      },
      vectorDatabase: (slug) => {
        return `${APP_BASE}/workspace/${slug}/settings/vector-database`;
      },
      members: (slug) => {
        return `${APP_BASE}/workspace/${slug}/settings/members`;
      },
      agentConfig: (slug) => {
        return `${APP_BASE}/workspace/${slug}/settings/agent-config`;
      },
    },
    thread: (wsSlug, threadSlug) => {
      return `${APP_BASE}/workspace/${wsSlug}/t/${threadSlug}`;
    },
  },
  apiDocs: () => {
    return `${API_BASE}/docs`;
  },
  orderFineTune: () => {
    return `${APP_BASE}/fine-tuning`;
  },
  settings: {
    system: () => {
      return `${APP_BASE}/settings/system-preferences`;
    },
    users: () => {
      return `${APP_BASE}/settings/users`;
    },
    invites: () => {
      return `${APP_BASE}/settings/invites`;
    },
    workspaces: () => {
      return `${APP_BASE}/settings/workspaces`;
    },
    chats: () => {
      return `${APP_BASE}/settings/workspace-chats`;
    },
    llmPreference: () => {
      return `${APP_BASE}/settings/llm-preference`;
    },
    transcriptionPreference: () => {
      return `${APP_BASE}/settings/transcription-preference`;
    },
    audioPreference: () => {
      return `${APP_BASE}/settings/audio-preference`;
    },
    embedder: {
      modelPreference: () => `${APP_BASE}/settings/embedding-preference`,
      chunkingPreference: () => `${APP_BASE}/settings/text-splitter-preference`,
    },
    embeddingPreference: () => {
      return `${APP_BASE}/settings/embedding-preference`;
    },
    vectorDatabase: () => {
      return `${APP_BASE}/settings/vector-database`;
    },
    security: () => {
      return `${APP_BASE}/settings/security`;
    },
    appearance: () => {
      return `${APP_BASE}/settings/appearance`;
    },
    agentSkills: () => {
      return `${APP_BASE}/settings/agents`;
    },
    apiKeys: () => {
      return `${APP_BASE}/settings/api-keys`;
    },
    logs: () => {
      return `${APP_BASE}/settings/event-logs`;
    },
    privacy: () => {
      return `${APP_BASE}/settings/privacy`;
    },
    embedSetup: () => {
      return `${APP_BASE}/settings/embed-config`;
    },
    embedChats: () => {
      return `${APP_BASE}/settings/embed-chats`;
    },
    experimental: () => {
      return `${APP_BASE}/settings/beta-features`;
    },
  },
  experimental: {
    liveDocumentSync: {
      manage: () => `${APP_BASE}/settings/beta-features/live-document-sync/manage`,
    },
  },
};

import { LLM } from "@/types";

const OPENAI_PLATFORM_LINK = "https://platform.openai.com/docs/overview";

// Custom OpenAI Models -------------------------
const models: LLM[] = [
  {
    modelId: "gpt-4-0125-preview",
    modelName: "GPT-4.1",
    provider: "openai",
    hostedId: "gpt-4-0125-preview",
    platformLink: OPENAI_PLATFORM_LINK,
    imageInput: true,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost: 10,
      outputCost: 30,
    },
  },
  {
    modelId: "gpt-4o",
    modelName: "GPT-4o",
    provider: "openai",
    hostedId: "gpt-4o",
    platformLink: OPENAI_PLATFORM_LINK,
    imageInput: true,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost: 5,
      outputCost: 15,
    },
  },
  {
    modelId: "o3",
    modelName: "o3",
    provider: "openai",
    hostedId: "o3",
    platformLink: OPENAI_PLATFORM_LINK,
    imageInput: false,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost: 1,
      outputCost: 2,
    },
  },
  {
    modelId: "o4-mini",
    modelName: "o4-mini",
    provider: "openai",
    hostedId: "o4-mini",
    platformLink: OPENAI_PLATFORM_LINK,
    imageInput: false,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost: 0.3,
      outputCost: 1.2,
    },
  },
  {
    modelId: "o4-mini-high",
    modelName: "o4-mini-high",
    provider: "openai",
    hostedId: "o4-mini-high",
    platformLink: OPENAI_PLATFORM_LINK,
    imageInput: false,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost: 0.6,
      outputCost: 2.4,
    },
  },
  {
    modelId: "gpt-4.5",
    modelName: "GPT-4.5",
    provider: "openai",
    hostedId: "gpt-4.5",
    platformLink: OPENAI_PLATFORM_LINK,
    imageInput: true,
    pricing: {
      currency: "USD",
      unit: "1M tokens",
      inputCost: 12,
      outputCost: 36,
    },
  },
];

export const OPENAI_LLM_LIST = models;

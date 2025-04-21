import { LLM } from "@/types";

const OPENAI_PLATFORM_LINK = "https://platform.openai.com/docs/overview";

export const OPENAI_LLM_LIST: LLM[] = [
  {
    modelId: "gpt-4", // must match allowed type
    modelName: "GPT-4.1",
    provider: "openai",
    hostedId: "gpt-4-0125-preview", // actual OpenAI model
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
    modelId: "gpt-3.5-turbo", // reuse allowed ID
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
    modelId: "gpt-3.5-turbo",
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
    modelId: "gpt-3.5-turbo",
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
    modelId: "gpt-4",
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

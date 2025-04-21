import { LLM } from "@/types";

const OPENAI_PLATFORM_LINK = "https://platform.openai.com/docs/overview";

export const OPENAI_LLM_LIST: LLM[] = [
  {
    modelId: "gpt-4",
    modelName: "GPT-4.1",
    provider: "openai",
    hostedId: "gpt-4-0125-preview",
    platformLink: OPENAI_PLATFORM_LINK,
    imageInput: false,
    pricing: { currency: "USD", unit: "1M tokens", inputCost: 10, outputCost: 30 },
  },
  {
    modelId: "gpt-4o",
    modelName: "GPT-4o",
    provider: "openai",
    hostedId: "gpt-4o",
    platformLink: OPENAI_PLATFORM_LINK,
    imageInput: true,
    pricing: { currency: "USD", unit: "1M tokens", inputCost: 5, outputCost: 15 },
  }
];

import type { CharacterDoc, SceneDoc, ProficiencyObject, EntityInfo, FeatureDoc } from "./dbTypes";

export type ClientScene = Omit<SceneDoc, "changeLogs"> & {
  children: ClientScene[];
};
export function createSceneTemplate(): ClientScene {
  return {
    _id: "",
    gameInstanceId: "",
    name: "未命名",
    richTextDescription: undefined,
    fatherId: null,
    relatedMapId: "",
    children: [],
    storage: [],
  };
}

export function createNewCharacterInfoTemplate(): CharacterDoc {
  return {
    _id: "",
    gameInstanceId: "",
    scope: "template",
    name: "",
    titles: "", //头衔
    alignment: "",
    age: 0,
    sex: "",
    class: "", //职业
    race: "",
    subRace: "", //亚种
    currentHP: 0,
    maxHP: 0,
    backgroundStory: "",
    proficiencies: createProficienciesTemplate(),
    proficiencyBonus: 2,
    experience: 0,
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
    equipment: [],
    spells: [],
    appearance: "",
    speed: 30,
    locationSceneId: "",
    currentInitiative: 0,
    backpack: [],
  };
}

export function createEntityTemplate(): EntityInfo {
  return {
    _id: "",
    name: "",
    description: "",
    ounce: 0,
    pound: 0,
    isCustom: true,
    changeLogs: [],
  };
}

export function createFeatureTemplate(): FeatureDoc {
  return {
    _id: "",
    name: "",
    description: "",
  };
}

export function createProficienciesTemplate(): ProficiencyObject[] {
  return [
    {
      name: "运动",
      description: "力量",
      type: "skill",
      active: false,
    },
    {
      name: "体操",
      description: "敏捷",
      type: "skill",
      active: false,
    },
    {
      name: "巧手",
      description: "敏捷",
      type: "skill",
      active: false,
    },
    {
      name: "隐匿",
      description: "敏捷",
      type: "skill",
      active: false,
    },
    {
      name: "奥秘",
      description: "智力",
      type: "skill",
      active: false,
    },
    {
      name: "历史",
      description: "智力",
      type: "skill",
      active: false,
    },
    {
      name: "调查",
      description: "智力",
      type: "skill",
      active: false,
    },
    {
      name: "自然",
      description: "智力",
      type: "skill",
      active: false,
    },
    {
      name: "宗教",
      description: "智力",
      type: "skill",
      active: false,
    },
    {
      name: "驯兽",
      description: "感知",
      type: "skill",
      active: false,
    },
    {
      name: "洞悉",
      description: "感知",
      type: "skill",
      active: false,
    },
    {
      name: "医药",
      description: "感知",
      type: "skill",
      active: false,
    },
    {
      name: "察觉",
      description: "感知",
      type: "skill",
      active: false,
    },
    {
      name: "求生",
      description: "感知",
      type: "skill",
      active: false,
    },
    {
      name: "欺瞒",
      description: "魅力",
      type: "skill",
      active: false,
    },
    {
      name: "威吓",
      description: "魅力",
      type: "skill",
      active: false,
    },
    {
      name: "表演",
      description: "魅力",
      type: "skill",
      active: false,
    },
    {
      name: "游说",
      description: "魅力",
      type: "skill",
      active: false,
    },
    {
      name: "力量",
      description: "",
      type: "save",
      active: false,
    },
    {
      name: "敏捷",
      description: "",
      type: "save",
      active: false,
    },
    {
      name: "体质",
      description: "",
      type: "save",
      active: false,
    },
    {
      name: "智力",
      description: "",
      type: "save",
      active: false,
    },
    {
      name: "感知",
      description: "",
      type: "save",
      active: false,
    },
    {
      name: "魅力",
      description: "",
      type: "save",
      active: false,
    },
    {
      name: "布甲",
      description: "轻甲",
      type: "armor",
      active: false,
    },
    {
      name: "皮甲",
      description: "轻甲",
      type: "armor",
      active: false,
    },
    {
      name: "镶钉皮甲",
      description: "轻甲",
      type: "armor",
      active: false,
    },
    {
      name: "兽皮甲",
      description: "中甲",
      type: "armor",
      active: false,
    },
    {
      name: "链甲衫",
      description: "中甲",
      type: "armor",
      active: false,
    },
    {
      name: "鳞甲",
      description: "中甲",
      type: "armor",
      active: false,
    },
    {
      name: "胸甲",
      description: "中甲",
      type: "armor",
      active: false,
    },
    {
      name: "半身板甲",
      description: "中甲",
      type: "armor",
      active: false,
    },
    {
      name: "环甲",
      description: "重甲",
      type: "armor",
      active: false,
    },
    {
      name: "链甲",
      description: "重甲",
      type: "armor",
      active: false,
    },
    {
      name: "板条甲",
      description: "重甲",
      type: "armor",
      active: false,
    },
    {
      name: "板甲",
      description: "重甲",
      type: "armor",
      active: false,
    },
    {
      name: "盾牌",
      description: "盾牌",
      type: "armor",
      active: false,
    },
    {
      name: "短棒",
      description: "简易近战 1d4 ",
      type: "weapon",
      active: false,
    },
    {
      name: "匕首",
      description: "简易近战 1d4",
      type: "weapon",
      active: false,
    },
    {
      name: "巨棒",
      description: "简易近战 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "手斧",
      description: "简易近战 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "标枪",
      description: "简易近战 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "轻锤",
      description: "简易近战 1d4",
      type: "weapon",
      active: false,
    },
    {
      name: "硬头锤",
      description: "简易近战 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "长棍",
      description: "简易近战 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "镰刀",
      description: "简易近战 1d4",
      type: "weapon",
      active: false,
    },
    {
      name: "矛",
      description: "简易近战 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "轻弩",
      description: "简易远程 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "飞镖",
      description: "简易远程 1d4",
      type: "weapon",
      active: false,
    },
    {
      name: "短弓",
      description: "简易远程 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "投石索",
      description: "简易远程 1d4",
      type: "weapon",
      active: false,
    },
    {
      name: "战斧",
      description: "军用近战 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "链枷",
      description: "军用近战 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "大砍刀",
      description: "军用近战 1d10",
      type: "weapon",
      active: false,
    },
    {
      name: "巨斧",
      description: "军用近战 1d12",
      type: "weapon",
      active: false,
    },
    {
      name: "巨剑",
      description: "军用近战 2d6",
      type: "weapon",
      active: false,
    },
    {
      name: "戟",
      description: "军用近战 1d10",
      type: "weapon",
      active: false,
    },
    {
      name: "骑枪",
      description: "军用近战 1d12",
      type: "weapon",
      active: false,
    },
    {
      name: "长剑",
      description: "军用近战 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "巨锤",
      description: "军用近战 2d6",
      type: "weapon",
      active: false,
    },
    {
      name: "钉头锤",
      description: "军用近战 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "长矛",
      description: "军用近战 1d10",
      type: "weapon",
      active: false,
    },
    {
      name: "刺剑",
      description: "军用近战 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "弯刀",
      description: "军用近战 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "短剑",
      description: "军用近战 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "三叉戟",
      description: "军用近战 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "战镐",
      description: "军用近战 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "战锤",
      description: "军用近战 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "鞭",
      description: "军用近战 1d4",
      type: "weapon",
      active: false,
    },
    {
      name: "吹箭筒",
      description: "军用远程 1",
      type: "weapon",
      active: false,
    },
    {
      name: "手弩",
      description: "军用远程 1d6",
      type: "weapon",
      active: false,
    },
    {
      name: "重弩",
      description: "军用远程 1d10",
      type: "weapon",
      active: false,
    },
    {
      name: "长弓",
      description: "军用远程 1d8",
      type: "weapon",
      active: false,
    },
    {
      name: "捕网",
      description: "军用远程 —",
      type: "weapon",
      active: false,
    },
  ];
}

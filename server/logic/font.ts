import { ISubsetMap } from "./subsetGen";
import { IFontURLStore } from "./urlFetcher";

interface IFontItemBase {
    id: string;
    family: string;
    subsets: string[];
    category: string;
    version: string;
    lastModified: string;
    popularity: number;
    defSubset: string;
    defVariant: string;
}

export interface IFontItem extends IFontItemBase {
    // variants parsed from googleAPI
    variants: string[];
};

export type IFullFontItem = IFontItemBase & IFontURLStore & { subsetMap: ISubsetMap };
export const AXEL_VERSION: string;
export class Toolkit {
    static extractIE(text: string, opts?: { extract?: boolean; hyperlink?: boolean; citation?: boolean; latex?: boolean }): { text: string; ie: any[]; inline_entities: any[] };
    static resize(buffer: Buffer, x: number, y: number, fit?: string, mime?: string): Promise<Buffer>;
    static waitAllPromises<T = any>(input: T): Promise<any>;
    static fetchBuffer(url: string, options?: any, opts?: { silent?: boolean }): Promise<Buffer>;
    static toUrl(client: any, path: string | Buffer, mediaType?: string): Promise<string | undefined>;
    static resolveMedia(client: any, media: any, mediaType?: string, opts?: any): Promise<any>;
    static getMp4Duration(buffer: Buffer, opts?: { silent?: boolean }): number;
    static getMp4Preview(videoBuffer: Buffer, opts?: any): Promise<Buffer | string>;
}
declare class BaseBuilder {
    setTitle(title: string): this;
    setSubtitle(subtitle: string): this;
    setBody(body: string): this;
    setFooter(footer: string): this;
    setContextInfo(obj: object): this;
    addPayload(obj: object): this;
}
export class Button extends BaseBuilder { constructor(client: any); [k: string]: any }
export class ButtonV2 extends BaseBuilder { constructor(client: any); [k: string]: any }
export class Carousel extends BaseBuilder { constructor(client: any); [k: string]: any }
export class AIRich extends BaseBuilder { constructor(client: any); [k: string]: any }

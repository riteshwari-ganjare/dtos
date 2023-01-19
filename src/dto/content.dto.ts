import { DtoBase } from "./dtoBase";
import { ContentType } from "../enum/contentType.enum";
import { UserDto } from "./user.dto";
export class ContentDto extends DtoBase{
    title?: string;
    type?: ContentType;   /// post and poll only
    body?: string;
    imageUrls?: string;
    videoUrl?: string;
    users?: UserDto[]
}
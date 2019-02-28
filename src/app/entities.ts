export interface ImageDetails
{
imageName :string;
hotspots : Hotspot[];
}

export interface Hotspot
{
    hotspotId:string;
    xCord:Number;
    yCord:Number;
    diameter?:Number;
    markup : Markup;
    filename:string;
}

export interface Markup
{
    title : string;
    titleImage? : string;
    footer:string;
    body:string;
}
import { Dimensions, PixelRatio } from "react-native";

const {width,height} = Dimensions.get('window')

export const widthp= val=>{
    let newval= typeof val === 'number' ? val : parseFloat(val)
    return PixelRatio.roundToNearestPixel((width * newval) / 100)
}

export const heightp= val=>{
    let newval= typeof val === 'number' ? val : parseFloat(val)
    return PixelRatio.roundToNearestPixel((height * newval) / 100)
}

export const heightpnum= val=>{
    // let newval= typeof val === 'number' ? val : parseFloat(val)
    return PixelRatio.roundToNearestPixel((height * val))
}
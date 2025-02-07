import type {Image} from '@/types/Image'

export const getReleventDataFromImage = (imageList:Image[]):Image[] => {
    return imageList.map((item:any):Image => {
        return {
          id:item.id, 
          headerImage:item.headerImage.url, 
          fullImage:item.webImage.url, 
          title:item.longTitle
        }
      })
} 
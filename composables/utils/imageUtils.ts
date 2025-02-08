import type {Image} from '@/types/Image'

// Only return the data we need for our platform : id, HQ image, smaller resolution image, title
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
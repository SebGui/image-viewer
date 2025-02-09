import { defineStore } from 'pinia'

import type { Image } from '@/types/Image'

type State = {
    imageList: Image[]
    currentPage: number
    filteredImageList: Image[]
    currentFilteredPage: number
    searchTerm: string
    isLoading: boolean
    isLoadmoreLoading: boolean
}

const useImageStore = defineStore('imageStore', {
    state: (): State => ({
        imageList: [],
        currentPage: 1,
        filteredImageList: [],
        currentFilteredPage: 1,
        searchTerm: '',
        isLoading: true,
        isLoadmoreLoading: false
    }),
    getters: {
        getImageList: (state):Image[] => state.imageList,
        getFilteredImageList: (state):Image[] => state.filteredImageList,
        getCurrentPage: (state):number => state.currentPage,
        getisLoading: (state):boolean => state.isLoading,
        getIsLoadmoreLoading: (state): boolean => state.isLoadmoreLoading,
        getSearchTerm: (state): string => state.searchTerm
    },
    actions: {
        setImageList(dataList:Image[]) {
            this.imageList = dataList
        },
        setFilteredImageList(dataList:Image[]) {
            this.filteredImageList = dataList
        },
        addToImageList(elementsToAdd:Image[]) {
            this.imageList = this.imageList.concat(elementsToAdd)
        },
        addToFilteredImageList(elementsToAdd:Image[]) {
            this.filteredImageList = this.filteredImageList.concat(elementsToAdd)
        },
        increaseCurrentPage() {
            this.currentPage++
        },
        increaseCurrentFilterPage() {
            this.currentFilteredPage++
        },
        setIsLoading(isLoading:boolean) {
            this.isLoading = isLoading
        },
        setIsLoadmoreLoading(isLoadmoreLoading:boolean) {
            this.isLoadmoreLoading = isLoadmoreLoading
        },
        setSearchTerm(searchTerm:string) {
            this.searchTerm = searchTerm
        }

    }
})

export default useImageStore
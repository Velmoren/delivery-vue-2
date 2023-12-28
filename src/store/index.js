import { restArray } from '@/constants/rests'
import { reactive } from 'vue'

export const store = reactive({
    isOpen: false,
    rests: restArray,
    toggleModal(value) {
        this.isOpen = value
    }
})
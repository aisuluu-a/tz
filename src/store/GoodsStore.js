import {makeAutoObservable} from "mobx"

export default class GoodsStore {
    constructor() {
        this._types = [
            {id:1, name: "Обувь"},
            {id:2, name: "Верхняя одежда"},
            {id:3, name: "Штаны"},
            {id:4, name: "ВЮбка"},
        ]
        this._brands = [
            {id:1, name: "nike"},
            {id:2, name: "puma"},
            {id:3, name: "fila"},
            {id:4, name: "sela"},
        ]

        this._goods = [
            {id:1, name: "nike", price:"5000c", img: 'https://images.satu.kz/93688660_w640_h640_basketbolnye-krossovki-nike.jpg'},
            {id:2, name: "puma", price:"5000c", img: 'https://images.satu.kz/93688660_w640_h640_basketbolnye-krossovki-nike.jpg'},
            {id:3, name: "nike", price:"5000c", img: 'https://images.satu.kz/93688660_w640_h640_basketbolnye-krossovki-nike.jpg'},
            {id:4, name: "puma", price:"5000c", img: 'https://images.satu.kz/93688660_w640_h640_basketbolnye-krossovki-nike.jpg'},
            {id:5, name: "nike", price:"5000c", img: 'https://images.satu.kz/93688660_w640_h640_basketbolnye-krossovki-nike.jpg'},
            {id:6, name: "puma", price:"5000c", img: 'https://images.satu.kz/93688660_w640_h640_basketbolnye-krossovki-nike.jpg'},
        ]

        this._selectedType ={}

        this._selectedBrand ={}

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setGoods(goods) {
        this._goods = goods
    }
    setBrands(brands) {
        this._brands = brands
    }

    setSelectedType(type){
        this._selectedType =type
    }

    setSelectedBrand(brand){
        this._selectedBrand =brand
    }


    get types() {
        return this._types
    }
    get goods() {
        return this._goods
    }
    get brands() {
        return this._brands
    }

    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

}
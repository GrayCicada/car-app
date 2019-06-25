const car = (name, model, owner, year, phone, image) => ({ name, model, owner, year, phone, image})
const log = (text, type, date = new Date()) => ({ text, type, date})

var cars = [
   car('Ford', 'Focus', 'Max', 2016, '+7 978 123 45 67', 'img/focus.jpg'),
   car('Ford', 'Mondeo', 'Vlad', 2018, '+7 978 122 21 54', 'img/mondeo.jpg'),
   car('Porshe', 'Maccam', 'Irina', 2015, '+7 978 321 54 76', 'img/maccam.jpg')
]

new Vue({
   el: '#app',
   data: {
      cars: cars,
      car: cars[0],
      modalVisible: false,
      selectedCarIndex: 0,
      phoneVisible: false,
      search: '',
      logs: []
   },
   methods: {
      selectCar(index) {
         this.car = cars[index]
         this.selectedCarIndex = index
      },
      newOrder() {
         this.modalVisible = false
         this.logs.push(
            log(`Success order: ${this.car.name} - ${this.car.model}`, 'ok')
         )

      },
      cancelOrder() {
         this.modalVisible = false
         this.logs.push(
            log(`Cancel order: ${this.car.name} - ${this.car.model}`, 'cnl')
         )
      }
   },
   computed: {
      phoneBtnText() {
         return this.phoneVisible ? 'Hide phone' : 'Show phone'
      },
      filtredCars() {
         return this.cars.filter(car => {
            return car.name.indexOf(this.search) > -1 || car.name.indexOf(this.search) > -1
         })
      }
   },
   filters: {
      date(value) {
         return value.toLocaleString()
      }
   }
})

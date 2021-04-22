

const app = new Vue({

    el: "#app",
    data:{
        title: "where i want to be",
        photos: [
        "https://siviaggia.it/wp-content/uploads/sites/2/2019/08/maldive-low-cost-ecc80-dhiffushi-lisola-perfetta-per-un-budget-ridotto.jpg",
        "https://magazine.valica.it/wp-content/uploads/2018/07/Maldive.jpg",
        "https://i.pinimg.com/originals/c4/e3/94/c4e394a9863bf3a793cd73806fd44d61.jpg",
        "https://www.kudatouroperator.it/wp-content/uploads/2016/04/MALDIVE-RELAX-Fotolia_115472889_Subscription_XXL-1024x683.jpg",
        ],
        indexPhoto: 0,
        intervalID: 0,  // settare qui perchè scope funzioni non globale
    },
    mounted(){
        this.startLoop();
    },
    methods:{
       nextPhoto(){
           
           this.indexPhoto += 1;
           
           if (this.indexPhoto > this.photos.length - 1){
               this.indexPhoto = 0;
               
           }
           
       },

       prevPhoto(){
        this.indexPhoto -= 1;

        if(this.indexPhoto < 0){
            this.indexPhoto = this.photos.length - 1;

        }
       },
       setPhotoWithDot(index){
           console.log(index);
           this.indexPhoto = index;
       },
       startLoop(){
            this.intervalID = setInterval(()=> {
             this.nextPhoto();

           } , 3000)
           this.$refs.slider.blur();
       },
       stopLoop(){
        clearInterval(this.intervalID);

        // focus slider
        this.$refs.slider.focus();

       }

    }


});


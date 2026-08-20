// $(document).ready(function(){

    const galleryContainer = document.querySelector('.gallery-container');
    const galleryControlsContainer = document.querySelector('.gallery-controls');
    const galleryControl = ["previous","next"];
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    class Carousel {
        
        constructor(container, items, controls, galleryControlsContainer){
            this.carouselContainer = container;
            this.carouselControls = controls;
            this.carouselArray = [...items];
            this.galleryControlsContainer = galleryControlsContainer;
            // debugger;
            console.log("Hi I'm from class")
        }

        updateGallery(){
            var length = this.carouselArray.length;
            var x = 1
            this.carouselArray.forEach(el => {
                el.classList.remove(`gallery-item-1`);
                el.classList.remove(`gallery-item-2`);
                el.classList.remove(`gallery-item-3`);
                el.classList.remove(`gallery-item-4`);
                el.classList.remove(`gallery-item-5`);
                x++;
            });

            this.carouselArray.slice(0,length).forEach((el, i) => {
                el.classList.add(`gallery-item-${i+1}`);
            })

            console.log(this.carouselArray)
        }

        setCurrentState(direction){
            if(direction.className == 'gallery-controls-previous'){
                this.carouselArray.unshift(this.carouselArray.pop());
            }else if(direction.className == 'home_Btn'){
                // var firstEl = document.querySelector("[data-index='0']");
                // console.log(firstEl)
            }
            else {
                this.carouselArray.push(this.carouselArray.shift())
            }
            this.updateGallery();
        }

        setControls(){
            this.carouselControls.forEach(control => {
                this.galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`;
                document.querySelector(`.gallery-controls-${control}`).innerText = control;
            })
        }

        useControls(){
            const triggers = [...this.galleryControlsContainer.childNodes];
            triggers.forEach(control => {
                control.addEventListener('click', e=> {
                    e.preventDefault();
                    this.setCurrentState(control);
                });
            });
        }
    }

    // const objCarousel = new Carousel(galleryContainer, galleryItems, galleryControl);
    // objCarousel.setControls();
    // objCarousel.useControls();
// });  

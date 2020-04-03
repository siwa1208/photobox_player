<template>
    <div id="Photos">
        <silent-box :gallery="gallery"></silent-box>
        <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
        caption="First slide"
        text="Nulla vitae elit libero, a pharetra augue mollis interdum."
        img-src="https://picsum.photos/1024/480/?image=52"
      ></b-carousel-slide>

      <!-- Slides with custom text -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
        <h1>Hello world!</h1>
      </b-carousel-slide>

      <!-- Slides with image only -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

      <!-- Slides with img slot -->
      <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
      <b-carousel-slide>
        <template v-slot:img>
          <img
            class="d-block img-fluid w-100"
            width="1024"
            height="480"
            src="https://picsum.photos/1024/480/?image=55"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>

      <!-- Slide with blank fluid image to maintain slide aspect ratio -->
      <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
          a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
        </p>
      </b-carousel-slide>
    </b-carousel>

    <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p>
    </div>
</template>

<script>

    export default {
        name: 'Photos',
        data() {
            return {
                gallery: [
                    {
                        src: 'https://media.gamestop.com/i/gamestop/10129627/Pokemon-Red-Version?$zoom$',
                        description: 'Star Night Sky Ravine by Mark Basarab, from Unsplash.',
                        alt: 'Blue starry night photo.',
                        thumbnailWidth: '220px'
                    },
                    {
                        src: 'https://media.gamestop.com/i/gamestop/10129625/Pokemon-Blue-Version',
                        description: 'Corno Nero, Italy by Luca Zanon, from Unsplash.',
                        alt: 'Landscape photo of mountain with fog.',
                        thumbnailWidth: '220px'
                    },
                    {
                        src: 'https://i.pinimg.com/originals/15/4e/35/154e35be31bcc7bee8fe921a2eb1a96b.png',
                        description: 'Remote forest path in Gävle, Sweden by Geran de Klerk, from Unsplash.',
                        alt: 'Low angle photo of pine trees.',
                        thumbnailWidth: '220px'
                    },
                ],
                slide: 0,
                sliding: null
            }
        },
        methods: {
        onSlideStart(slide) {
            this.sliding = true
        },
        onSlideEnd(slide) {
            this.sliding = false
        }
    },
        components: {

        }
    }
</script>
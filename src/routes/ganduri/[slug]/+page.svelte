<script>
    export let data; // Aici primim postul complet din +page.js
</script>

<article class="post-container">
    <h1>{data.post.title}</h1>
    <p class="fancy-text">
        {data.post.content}
    </p>
</article>

<style>
    .post-container {
        max-width: 800px;
        margin: 2rem auto;
        padding: 2rem;
    }
    h1 {
        font-size: 2.8rem;
        margin-bottom: 2rem;
        text-align: center;
        line-height: 1.3;
    }
    .fancy-text {
        font-family: 'Merriweather', serif; /* Aici vom pune fontul nou */
        font-size: 1.2rem;
        line-height: 2;
        opacity: 0.95;
    }
</style>
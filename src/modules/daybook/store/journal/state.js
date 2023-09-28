export default () => ({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptate.",
            picture: null,
        },
        {
            id: new Date().getTime() +1000,
            date: new Date().toDateString(),
            text: "Dolore nostrud ut velit eu mollit minim ea officia magna eiusmod ad. Et velit tempor velit consectetur occaecat fugiat aliqua aute id minim deserunt aliquip consequat voluptate. Do nostrud anim reprehenderit deserunt commodo adipisicing nulla ipsum id mollit incididunt non veniam. Magna aliquip sint amet mollit. Et veniam nisi cillum irure do incididunt esse nisi consequat.",
            picture: null,
        },
        {
            id: new Date().getTime()+2000,
            date: new Date().toDateString(),
            text: "Velit ea est id eu laborum nisi eu laborum exercitation. Ex culpa sit qui enim dolor ad. Deserunt esse esse elit aute ut laboris est sunt. Pariatur aliqua laboris dolore officia sit Lorem culpa.",
            picture: null,
        },
    ]
})
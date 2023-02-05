// Project Icon Font:
// https://www.svgrepo.com/svg/384245/controller-joystick-games-video-console?edit=true
// https://www.svgrepo.com/svg/383702/landing-page-web-design?edit=true
// https://www.svgrepo.com/svg/459107/robot?edit=true
// https://www.svgrepo.com/svg/471159/check-square-broken?edit=true
// https://www.svgrepo.com/svg/383754/security-protection-lock-padlock-square-locked?edit=true
// https://www.svgrepo.com/svg/339111/dashboard?edit=true
// https://www.svgrepo.com/svg/257454/profile?edit=true
// https://www.svgrepo.com/svg/298828/store?edit=true
// https://www.svgrepo.com/svg/429278/cart-essential-shopping?edit=true
// https://www.svgrepo.com/svg/144539/artist-color-palette?edit=true
// https://www.svgrepo.com/svg/424981/online?edit=true

export interface IGithubRepos {
    name: string;
    topics: [];
    html_url: string;
    description: string;
    id: number;
}

export function useGithubAutomatedRepos(data: [], keyWordDeploy: string) {
    let dataFilter = [];
    dataFilter = data.filter((item: IGithubRepos) => item.topics.includes(keyWordDeploy as never));

    return dataFilter.map((item: IGithubRepos) => ({
        id: item.id,
        name: item.name,
        html_url: item.html_url,
        description: item.description,
        topics: item.topics,
    }));
}

export function IconsData() {
    // 25px
    const iconStacks = {
        android: 'https://user-images.githubusercontent.com/59892368/215260539-ffaa9b19-07a8-420d-82c7-1b1e0e79139b.svg',
        angular: 'https://user-images.githubusercontent.com/59892368/215260538-a2bc2db2-23dd-4600-9a53-be6b3c7fc103.svg',
        aws: 'https://user-images.githubusercontent.com/59892368/215260536-748d14f8-5242-4d5a-9faf-6d62ed38a87a.svg',
        c: 'https://user-images.githubusercontent.com/59892368/215260535-be3713a8-d075-4c85-88ca-4b3703f9e7b3.svg',
        cpp: 'https://user-images.githubusercontent.com/59892368/215260533-1ede6b38-7c51-4c89-ac2c-a1195c2b912b.svg',
        csharp: 'https://user-images.githubusercontent.com/59892368/215260532-33106206-6ca4-4d11-bdc3-9171491979a5.svg',
        css3: 'https://user-images.githubusercontent.com/59892368/210762519-fc191098-1198-4668-9eb5-d0c1481da8c7.svg',
        dart: 'https://user-images.githubusercontent.com/59892368/215260531-179da616-9fc3-41de-99ed-15dddf2d021b.svg',
        django: 'https://user-images.githubusercontent.com/59892368/215260529-5fb18a51-b2bc-4092-8a87-f051f89dd30e.svg',
        docker: 'https://user-images.githubusercontent.com/59892368/215260528-b50b803d-a037-4572-812b-95801f48c2bd.svg',
        eslint: 'https://user-images.githubusercontent.com/59892368/215260527-373e10c7-04d3-45c5-98b4-74bf586de7f6.svg',
        expo: 'https://user-images.githubusercontent.com/59892368/210762516-b48ee0ef-9d7b-4d86-951b-b80515c39783.svg',
        express: 'https://user-images.githubusercontent.com/59892368/215260526-dcaca470-3c4d-430e-84c9-65a569b3b003.svg',
        figma: 'https://user-images.githubusercontent.com/59892368/215260525-924e0be5-1f36-4d70-a21b-40382b01dab4.svg',
        firebase: 'https://user-images.githubusercontent.com/59892368/215260523-f958d8c1-8634-4b2c-a880-437f98b1538d.svg',
        flask: 'https://user-images.githubusercontent.com/59892368/215260521-e80bde19-b70d-4866-8ef7-a836dd819e17.svg',
        gatsby: 'https://user-images.githubusercontent.com/59892368/215260520-8e935c1a-46b2-451b-a87c-e9f4e7c081c4.svg',
        go: 'https://user-images.githubusercontent.com/59892368/215260519-e619fbd8-c518-477b-9327-a3afa23f988e.svg',
        html5: 'https://user-images.githubusercontent.com/59892368/210755124-715c0580-95cc-46a7-bf17-5854e0450f4d.svg',
        java: 'https://user-images.githubusercontent.com/59892368/215260518-171e0fb1-1cd7-4097-bcba-05089c6adf46.svg',
        javascript: 'https://user-images.githubusercontent.com/59892368/210762520-8226f647-a814-4723-8e6d-ed0334550838.svg',
        kotlin: 'https://user-images.githubusercontent.com/59892368/215260517-8904a569-d2ec-48c4-8adc-660e929db93e.svg',
        laravel: 'https://user-images.githubusercontent.com/59892368/215260515-4f3075d5-ce25-4824-87ff-736ccaf42311.svg',
        linux: 'https://user-images.githubusercontent.com/59892368/215260512-04a0d227-c913-4946-9ff4-b3fb691df5ff.svg',
        mongodb: 'https://user-images.githubusercontent.com/59892368/215260514-a4f02cca-c530-4de2-88ee-5250b24a1456.svg',
        mysql: 'https://user-images.githubusercontent.com/59892368/215260511-5299678e-c337-4b75-bbb3-b1b4e5ae28a5.svg',
        netcore: 'https://user-images.githubusercontent.com/59892368/215260510-b72be359-f22b-4751-a8ab-41cd4f51c9c9.svg',
        nextjs: 'https://user-images.githubusercontent.com/59892368/210762514-59814e6d-5cc8-4981-aa11-904b83a51d40.svg',
        nodejs: 'https://user-images.githubusercontent.com/59892368/210762525-21dfac80-b121-4517-b3dd-3f62fe413d5a.svg',
        npm: 'https://user-images.githubusercontent.com/59892368/215260509-7ae59bdb-00c5-4ca2-968d-2dc46ebc22ba.svg',
        objectc: 'https://user-images.githubusercontent.com/59892368/215260537-d56e6052-6182-4edb-a770-842de3b8c24f.svg',
        php: 'https://user-images.githubusercontent.com/59892368/215260508-ab7231f0-bfd4-48ee-8f7b-49ed06bdacb2.svg',
        postgresql: 'https://user-images.githubusercontent.com/59892368/215260507-a1ab30ad-16c5-48b6-8442-4258d3fc828f.svg',
        prettier: 'https://user-images.githubusercontent.com/59892368/215260503-ce103bd2-0249-4be4-9a52-cd3044b30728.svg',
        prisma: 'https://user-images.githubusercontent.com/59892368/215260501-ff824fa1-ef05-4de7-af76-1586fc2ac91b.svg',
        python: 'https://user-images.githubusercontent.com/59892368/215260500-73b6c85e-d843-4820-a771-b8bdb23ed2d2.svg',
        rails: 'https://user-images.githubusercontent.com/59892368/215260540-e44f5ead-fa4b-4b0c-9247-8884059f8b8e.svg',
        react: 'https://user-images.githubusercontent.com/59892368/210763677-ee1a0283-eea7-45de-9589-86d7c50a8cb0.svg',
        reacticons: 'https://user-images.githubusercontent.com/59892368/210762509-d3078bc5-8c0c-4765-84f7-cf52532215d4.svg',
        ruby: 'https://user-images.githubusercontent.com/59892368/215260498-fefc4d46-7ff1-470c-a011-f73fe070c798.svg',
        rust: 'https://user-images.githubusercontent.com/59892368/215260552-e120de00-00a0-4058-9e6f-83e10f552844.svg',
        sass: 'https://user-images.githubusercontent.com/59892368/210762521-7383ac1d-c896-4829-b531-61c9a4f0d7ea.svg',
        scala: 'https://user-images.githubusercontent.com/59892368/215260549-52bfb07f-bbf8-47fe-bc69-222c6211520a.svg',
        spring: 'https://user-images.githubusercontent.com/59892368/215260541-1ab28ab8-41bb-4e19-8ffc-bfd37ce88817.svg',
        sqlite: 'https://user-images.githubusercontent.com/59892368/215260548-83c41e10-09c6-4ddf-8e12-f56746d6b0f6.svg',
        storybook: 'https://user-images.githubusercontent.com/59892368/215260547-8d55e026-9652-45af-81b7-54f8e4c04d87.svg',
        styledcomponents: 'https://user-images.githubusercontent.com/59892368/210762512-f8123c30-3992-4789-abe0-314fdcf45fe3.svg',
        swagger: 'https://user-images.githubusercontent.com/59892368/215260545-7ecf92e0-a09f-459b-83aa-e7f7ace9c3dc.svg',
        switch: 'https://user-images.githubusercontent.com/59892368/215260544-65e39534-eff5-405d-8739-49271ce21d18.svg',
        tailwind: 'https://user-images.githubusercontent.com/59892368/215260543-69c977bb-072a-4ed8-bdbc-6d2319098fcf.svg',
        typescript: 'https://user-images.githubusercontent.com/59892368/210762527-ae3afe1f-fe36-46a9-98ad-35dbae4d1adf.svg',
        vue: 'https://user-images.githubusercontent.com/59892368/215260542-defd6142-e8a8-44f5-8c8a-c6dfaf3d114a.svg',
    };

    // 64px
    const iconsProjects = {
        art: 'https://user-images.githubusercontent.com/59892368/212994060-8d1644c7-96d7-4f3b-8e94-65ff76db0c92.svg',
        artificialintelligence: 'https://user-images.githubusercontent.com/59892368/212984565-a424b06e-db5e-464a-a5df-ddf7c9bab6ad.svg',
        dashboard: 'https://user-images.githubusercontent.com/59892368/212991791-588a6c13-795e-47aa-b496-8bdbaa3cac30.svg',
        education: 'https://user-images.githubusercontent.com/59892368/212284904-0b4f29fa-4141-4212-b516-d4e4fcdb8519.svg',
        game: 'https://user-images.githubusercontent.com/59892368/212984732-79dd44aa-23a5-4b83-ae28-7a2ddd443032.svg',
        landingpage: 'https://user-images.githubusercontent.com/59892368/212984364-88a0808b-a8d1-440c-b74e-f82bc3e28748.svg',
        personalwebsite: 'https://user-images.githubusercontent.com/59892368/213131421-fa77f07c-9120-4b40-859d-2bd799de6681.svg',
        productivity: 'https://user-images.githubusercontent.com/59892368/212994727-f05595d9-53b7-43a5-b974-b27fa2557653.svg',
        security: 'https://user-images.githubusercontent.com/59892368/212985266-a658da1c-64ba-46b7-a069-a148ca217be9.svg',
        store: 'https://user-images.githubusercontent.com/59892368/213137554-83aa6798-9487-4d1b-a260-fd2035adaaad.svg',
    };

    return {
        iconStacks,
        iconsProjects,
    };
}

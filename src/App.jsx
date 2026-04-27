//2 
const response = {
    page: 1,
    results: [
        {
            userId: 1,
            id: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita etcum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt remeveniet architecto",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 2,
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 3,
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 4,
            title: "eum et est occaecati",
            body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
            image: "https://picsum.photos/500",
        },
        {
            userId: 1,
            id: 5,
            title: "nesciunt quas odio",
            body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
            image: "https://picsum.photos/500",
        },
    ],
};

export default function App() {
    return(
        <div> 
            {/*1*/}
            <div className="bg-black text-white">
                <nav className="flex justify-between items-center">
                    <div className="">
                        <b>
                            Danish Al Fayyadh Sunarta
                        </b>
                    </div>

                    <ul className="flex gap-10">
                        <li><a href="https://github.com/codename-alfa" className="">Profile</a></li>
                        <li><a href="https://github.com/codename-alfa" className="">Contact</a></li>
                        <li><a href="https://github.com/codename-alfa" className="">Projects</a></li>
                    </ul>
                </nav>
            </div>

            {/*2*/}
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {response.results.map((item) => (
                        <div key={item.id} className="">
                            <img src={item.image} alt={item.title} className="w-full h-48 object-cover"/>
                            <div className="">
                                <h2 className="">{item.title}</h2>
                                <p className="">{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
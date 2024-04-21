export default function Section({title, subtitle, progress, total, num}) {
    const progressHeight = num === 3 ? 22 : 35
    return (
        <section className="flex flex-col   rounded-3xl bg-white shadow-xl hover:shadow-lg hover:cursor-pointer">
            {/* Image */}
            <img src={`fancy${num}.png`}
                 className="aspect-video max-h-40    object-cover rounded-t-3xl"/>

            <div className="p-4">
                {/* Title */}
                <h2 className="font-extrabold text-xl">{title}</h2>

                {/* Subtitle */}
                {/*<h3 className="text-gray-500 text-sm">{subtitle}</h3>*/}

                {/* Progress bar */}
                <div className={`bg-[url(progress${num}.png)] bg-cover mt-1 h-[${progressHeight}px]`}></div>
            </div>
        </section>
    )
}
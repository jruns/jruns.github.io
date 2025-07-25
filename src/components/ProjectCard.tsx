type ProjectData = {
	title: string
	categories: string
	stack: string
	keyFeatures: { 
        description: string, 
        children?: { description: string }[]
    }[],
    screenshot: string,
    liveSite?: string
}

export default function ProjectCard({
	title,
	categories,
	stack,
	keyFeatures,
	screenshot,
	liveSite,
}: ProjectData) {
    return(
        <div className="flex flex-col-reverse sm:flex-row border-2 border-neutral-200 dark:border-neutral-600 rounded-lg hover:border-neutral-400 dark:hover:border-neutral-400 p-2 sm:space-x-4">
            <div className="sm:w-3/5">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mt-0.5 mb-3">{categories}, {stack}</p>
                <h3 className="text-base font-semibold mb-1">Key features:</h3>
                <ul className="list-disc list-outside pl-4.5 text-sm">
                    { keyFeatures.map( (feature, i) => (
                        <li key={i}>
                            <span dangerouslySetInnerHTML={{ __html: feature.description }} />
                            { feature.children ?
                                <ul className="list-disc list-outside pl-4.5">
                                    { feature.children.map( (feature, i) => (
                                        <li key={i}>
                                            <span dangerouslySetInnerHTML={{ __html: feature.description }} />
                                        </li>
                                    ))}
                                </ul>
                                : null
                            }
                        </li>
                    ))}
                </ul>
                { liveSite ? 
                    <div className="flex pt-4">
                        <a href={liveSite} className="bg-buttons text-white font-semibold tracking-widest rounded-sm ring-2 ring-blue-100 py-1 px-4 w-full sm:w-auto text-center sm:text-left" target="_blank" title={title + ' Live Site'}>View Live Site</a>
                    </div>
                    : null
                }
            </div>
            <div className="h-36 sm:h-auto sm:w-2/5 mb-4 sm:mb-0 bg-no-repeat bg-cover" style={{backgroundImage: "url('" + screenshot + "')"}} aria-hidden="true"></div>
        </div>
    )
}
export const Work = () => {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-center mb-10">
                    How It Works
                </h2>

                <div className="grid gap-8 md:grid-cols-3 text-center">
                    <div>
                        <h3 className="font-semibold text-lg">Search Jobs</h3>
                        <p className="text-gray-600 mt-2">
                            Find jobs that match your skills and interests.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">View Details</h3>
                        <p className="text-gray-600 mt-2">
                            Learn more about roles, responsibilities, and companies.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-lg">Apply Easily</h3>
                        <p className="text-gray-600 mt-2">
                            Apply directly to opportunities you like.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
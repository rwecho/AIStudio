import MainLayout from "@/app/components/MainLayout";

const NewPage = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-white mb-8">提交新网站</h1>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="url"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              网站地址 (URL)
            </label>
            <input
              type="url"
              id="url"
              name="url"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent"
              placeholder="https://"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              网站描述(可选)
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent"
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              网站截图 (可选)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              className="w-full px-4 py-2 rounded-md bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-[#06b6d4] focus:border-transparent"
            />
          </div>

          <div>
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-[#7c3aed] to-[#ec4899] text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              提交网站
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewPage;

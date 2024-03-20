export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-purple-200 after:via-violet-300 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]"></div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 275"
          className="w-32 mx-auto"
        >
          <path
            fill="#fff"
            d="M104.88 9.853c-.101.101-.184 2.214-.184 4.696v4.512H85.912v4.503c0 5.604.438 5.165-5.159 5.165h-4.497l-.075 4.627-.076 4.627-4.627.076-4.627.076v76.216l4.627.076 4.627.076.076 4.624.075 4.625 14.151.071 14.151.072.067 4.144c.037 2.279.133 4.424.213 4.767l.146.623 18.848-.071 18.848-.071.075-4.46c.056-3.277.173-4.541.44-4.763.25-.207 4.721-.324 14.289-.374l13.925-.071.076-4.621.075-4.62 4.621-.076 4.62-.075V38.26l-4.558-.138-4.558-.139-.138-4.558-.138-4.558-4.461-.075c-5.455-.093-5.036.331-5.131-5.193l-.077-4.4-9.392-.138-9.392-.138-.076-4.627-.076-4.627h-18.87c-10.378 0-18.952.082-19.054.184M19.183 29.084c-.075.198-.103 2.281-.061 4.629l.077 4.27h37.845v-9.116l-18.861-.071c-15.264-.057-18.888-.002-19 .288m171.609 9.222c-.101.101-.184 2.214-.184 4.696v4.512h37.845v-9.392h-18.738c-10.307 0-18.822.082-18.923.184m47.267 14.11-.076 4.628-23.618.138-23.619.138-.138 33.15-.138 33.149-4.144.067c-5.998.097-5.36-.487-5.449 4.978l-.076 4.623-14.151.072-14.15.071-.076 4.625-.076 4.625-4.461.075c-5.518.094-5.104-.336-5.007 5.21l.076 4.383 4.696.138 4.696.138.076 4.621.075 4.62 4.621.076 4.62.076.076 4.46c.056 3.277.172 4.541.44 4.763.25.207 4.721.324 14.289.373l13.925.072.075 4.621.076 4.62 4.62.076 4.621.075.076 4.627c.041 2.545.103 4.656.138 4.69.034.035 6.464.128 14.289.207l14.226.145.076 4.627.076 4.627h75.94l.076-4.627.075-4.627 18.923-.138 18.923-.138.075-4.461c.056-3.277.173-4.541.44-4.763.25-.207 4.721-.324 14.289-.373l13.925-.072.138-9.392.138-9.392 4.627-.076 4.627-.076v-37.821l.622-.146c.342-.08 2.486-.175 4.765-.212l4.144-.067V105.11l-4.461-.075c-3.277-.056-4.541-.173-4.763-.44-.207-.25-.324-4.721-.373-14.289l-.072-13.925-4.558-.138-4.558-.138-.138-4.558-.138-4.558-4.461-.076c-5.455-.092-5.036.332-5.131-5.192l-.077-4.401-14.088-.138-14.088-.138-.139-4.558-.138-4.558-47.576-.07-47.576-.07-.076 4.628M114.227 66.713v9.392H95.442l-.073-9.114c-.04-5.013-.012-9.272.062-9.465.106-.276 2.12-.336 9.465-.278l9.331.072v9.393m38.121 0v9.392h-18.784l-.073-9.114c-.04-5.013-.013-9.272.061-9.465.106-.276 2.121-.336 9.466-.278l9.33.072v9.393m-19.225 19.305c.216.261.293 1.767.241 4.765l-.077 4.383-4.696.138-4.696.138v9.116l9.392.138 9.393.138v9.393H95.442v-9.393l9.392-.138 9.393-.138v-9.116l-4.697-.138-4.696-.138-.076-4.383c-.052-2.998.024-4.504.241-4.765.472-.569 27.652-.569 28.124 0"
          />
          <path d="M94.751 4.558v4.558h-19.06v9.392H9.116v9.669H0v10.497h9.116v9.392h47.512l.07 33.357.07 33.356 4.765.076 4.765.075v9.379h9.393v9.393h19.06v9.668h28.453v9.392h19.061v19.061h9.669v104.42h19.889v-94.751h8.564v94.751h20.165v-75.691h27.625v9.393h86.464v-9.393h8.563v75.691h20.166v-85.359h17.956v85.359h20.166V162.431h9.392v-38.122H400V104.42h-9.116V75.691h-9.392v-9.393h-9.669v-19.06H343.37v-9.669H238.674v-9.392h-47.79v-9.669h-19.061V9.116h-19.061V0H94.751v4.558m48.129 9.738.076 4.627 9.392.138 9.392.138.077 4.4c.095 5.524-.324 5.1 5.131 5.193l4.461.075.138 4.558.138 4.558 4.558.139 4.558.138v75.967l-4.62.075-4.621.076-.075 4.62-.076 4.621-13.925.071c-9.568.05-14.039.167-14.289.374-.267.222-.384 1.486-.44 4.763l-.075 4.46-18.848.071-18.848.071-.146-.623c-.08-.343-.176-2.488-.213-4.767l-.067-4.144-14.151-.072-14.151-.071-.075-4.625-.076-4.624-4.627-.076-4.627-.076V38.135l4.627-.076 4.627-.076.076-4.627.075-4.627h4.497c5.597 0 5.159.439 5.159-5.165v-4.503h18.784v-4.512c0-2.482.083-4.595.184-4.696.102-.102 8.676-.184 19.054-.184h18.87l.076 4.627M57.044 33.425v4.558H19.199l-.077-4.27c-.042-2.348-.014-4.431.061-4.629.112-.29 3.736-.345 19-.288l18.861.071v4.558m171.409 9.393v4.696h-37.845v-4.512c0-2.482.083-4.595.184-4.696.101-.102 8.616-.184 18.923-.184h18.738v4.696m104.972 9.668.139 4.558 14.088.138 14.088.138.077 4.401c.095 5.524-.324 5.1 5.131 5.192l4.461.076.138 4.558.138 4.558 4.558.138 4.558.138.072 13.925c.049 9.568.166 14.039.373 14.289.222.267 1.486.384 4.763.44l4.461.075v18.509l-4.144.067c-2.279.037-4.423.132-4.765.212l-.622.146v37.821l-4.627.076-4.627.076-.138 9.392-.138 9.392-13.925.072c-9.568.049-14.039.166-14.289.373-.267.222-.384 1.486-.44 4.763l-.075 4.461-18.923.138-18.923.138-.075 4.627-.076 4.627h-75.94l-.076-4.627-.076-4.627-14.226-.145c-7.825-.079-14.255-.172-14.289-.207-.035-.034-.097-2.145-.138-4.69l-.076-4.627-4.621-.075-4.62-.076-.076-4.62-.075-4.621-13.925-.072c-9.568-.049-14.039-.166-14.289-.373-.268-.222-.384-1.486-.44-4.763l-.076-4.46-4.62-.076-4.621-.076-.075-4.62-.076-4.621-4.696-.138-4.696-.138-.076-4.383c-.097-5.546-.511-5.116 5.007-5.21l4.461-.075.076-4.625.076-4.625 14.15-.071 14.151-.072.076-4.623c.089-5.465-.549-4.881 5.449-4.978l4.144-.067.138-33.149.138-33.15 23.619-.138 23.618-.138.076-4.628.076-4.628 47.576.07 47.576.07.138 4.558m-237.994 5.04c-.074.193-.102 4.452-.062 9.465l.073 9.114h18.785V57.32l-9.331-.072c-7.345-.058-9.359.002-9.465.278m38.121 0c-.074.193-.101 4.452-.061 9.465l.073 9.114h18.784V57.32l-9.33-.072c-7.345-.058-9.36.002-9.466.278m-28.553 28.492c-.217.261-.293 1.767-.241 4.765l.076 4.383 4.696.138 4.697.138v9.116l-9.393.138-9.392.138v9.393h47.238v-9.393l-9.393-.138-9.392-.138v-9.116l4.696-.138 4.696-.138.077-4.383c.052-2.998-.025-4.504-.241-4.765-.472-.569-27.652-.569-28.124 0" />
        </svg>

        <div className="mt-6 text-center">
          <h1 className="text-3xl text-black">Ovelha Elétrica</h1>
          <p>Mercerism is a swindle.</p>
        </div>
      </div>
    </main>
  );
}

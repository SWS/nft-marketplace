import React from 'react';

interface WhiteWaterMarkProps {
  className?: string;
}

const WhiteWaterMark: React.FC<WhiteWaterMarkProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 247 246"
  >
    <path
      fill="#FFFFFF"
      fillRule="evenodd"
      d="M99.966 6.005c3.147-.198 6.295-.289 9.46-.289 20.585 0 40.664 4.142 59.567 12.409 21.272 9.262 40.374 23.552 55.135 41.188.597.688 1.374.977 2.17.977.688 0 1.285-.199 1.863-.687 1.176-.977 1.375-2.858.398-4.034-15.357-18.324-35.146-33.193-57.196-42.762C151.555 4.34 130.771 0 109.318 0c-3.256 0-6.494.09-9.75.29-1.574.09-2.75 1.483-2.66 3.056.091 1.574 1.466 2.768 3.058 2.66zM228.65 164.138c2.659-.488 5.427-.398 7.977.398 1.465.398 2.352 2.062 1.7 3.31-.397 1.574-2.062 2.46-3.545 1.972a9.504 9.504 0 00-5.228-.289c-15.665 3.057-29.448 4.829-40.862 5.119-14.272.38-20.766-1.484-22.937-2.37-.108 0-.307 0-.398-.09-.108 0-.307-.109-.398-.199 0-.091-.09-.091-.09-.091-5.119-3.238-11.903-1.773-15.159 3.256a5.835 5.835 0 01-.886.796c-1.085 3.654-1.773 8.375 1.085 11.83 1.664 1.954 7.381 6.892 24.022 8.466 1.592.199 2.768 1.573 2.569 3.147-.199 1.483-1.375 2.569-2.858 2.569h-.29c-18.107-1.682-25.197-7.29-27.856-10.546-5.517-6.783-2.858-15.864-.796-20.585 4.124-9.442 4.323-19.988.488-29.648-3.744-9.659-11.125-17.238-20.585-21.381-19.608-8.465-42.436.489-51.01 20.097-6.096 14.091-18.704 29.069-34.659 41.188-4.92 3.745-9.93 7.001-14.76 9.66-1.375.687-3.04.199-3.835-1.176-.687-1.375-.199-3.039 1.176-3.835 4.612-2.478 9.352-5.517 14.073-9.171 15.158-11.432 27.17-25.614 32.885-38.819 9.75-22.448 36.033-32.795 58.482-23.045 10.925 4.721 19.282 13.495 23.624 24.529 3.346 8.664 4.033 17.926 1.863 26.699 4.829-2.08 10.636-1.773 15.357 1.176l.053.019c.969.355 6.637 2.433 20.822 2.043 11.124-.308 24.619-1.972 39.976-5.029zm-39.488 18.812c11.233-.289 24.528-1.863 39.488-4.721 1.465-.307 3.057.778 3.346 2.171.29 1.574-.687 3.057-2.261 3.346-15.357 2.858-28.942 4.541-40.465 4.83-1.374.091-2.659.091-3.943.091-17.926 0-25.306-3.546-27.766-5.12l-.058-.031c-.179-.096-.349-.187-.431-.367a2.907 2.907 0 01-1.374-2.46 2.864 2.864 0 012.858-2.858c.777 0 1.573.398 2.062.887 0 .09.09.09.09.09 1.176.796 8.176 4.739 28.454 4.142zM173.714 32.506c.688-1.375 2.46-1.882 3.835-1.086 27.169 14.978 48.152 37.842 60.959 66.006 3.148 7.182 4.414 15.068 3.636 22.756-.199 2.08-.597 4.143-1.085 6.114-.29 1.285-1.465 2.171-2.75 2.171-.199 0-.488 0-.687-.091-1.465-.398-2.46-1.881-2.062-3.455.398-1.772.687-3.545.886-5.318.688-6.711-.506-13.602-3.256-19.807-12.119-27.206-32.306-49.075-58.391-63.456-1.374-.687-1.881-2.46-1.085-3.834zm-135.793 6.91c.489 0 .977-.09 1.484-.398 5.915-3.546 12.12-6.693 18.505-9.262 16.442-6.693 33.68-10.148 51.39-10.148 18.704 0 36.829 3.835 54.049 11.233 1.484.597 3.148 0 3.745-1.483s0-3.147-1.484-3.744c-17.926-7.778-36.919-11.722-56.328-11.722-18.505 0-36.522 3.546-53.561 10.546-6.693 2.768-13.187 6.006-19.301 9.66-1.375.795-1.773 2.568-.977 3.943.615.868 1.502 1.375 2.478 1.375zm-27.17 42.273c-.596 0-1.283-.199-1.772-.597-1.284-.995-1.483-2.767-.398-4.052C19.326 63.148 32.603 51.915 48.07 43.467c1.375-.687 3.039-.198 3.835 1.176.687 1.375.199 3.04-1.176 3.835C35.95 56.564 23.36 67.4 13.013 80.604c-.579.687-1.375 1.085-2.261 1.085zm191.507 44.119c-5.517 2.46-12.101 0-14.579-5.517-8.755-19.609-24.42-35.075-44.209-43.74-5.319-2.369-10.926-4.141-16.534-5.317-1.573-.29-3.057.687-3.346 2.17-.289 1.574.687 3.058 2.171 3.347 5.209 1.085 10.437 2.767 15.466 4.92 18.414 8.086 33.084 22.557 41.26 40.79 2.75 6.205 8.864 9.859 15.267 9.859 2.261 0 4.631-.489 6.802-1.483 4.033-1.864 7.181-5.12 8.755-9.262 1.573-4.142 1.483-8.773-.398-12.807-4.342-9.66-9.949-18.722-16.733-26.79-.976-1.175-2.858-1.374-4.033-.397-1.176.976-1.375 2.858-.398 4.033 6.494 7.688 11.812 16.262 15.954 25.415 1.176 2.659 1.284 5.716.199 8.466-.814 2.966-2.894 5.137-5.644 6.313zM35.57 123.456C33 129.462 25.223 139.411 13.9 147.985c-2.063 1.573-4.125 3.057-6.296 4.431-.398.308-.994.398-1.483.398-.977 0-1.863-.488-2.46-1.374-.886-1.375-.488-3.057.886-3.944 1.972-1.175 3.835-2.55 5.807-4.033 10.437-7.887 17.637-17.04 19.898-22.268 6.692-15.375 17.727-28.381 31.8-37.643 1.284-.886 3.057-.488 3.943.796.886 1.284.489 3.057-.796 3.944-13.096 8.556-23.334 20.784-29.63 35.164zm-32.596-3.744c.796 0 1.483-.29 2.062-.886 2.275-2.376 3.715-4.396 4.533-5.544l.188-.263c.09-.09.199-.289.29-.488 0 0 0-.091.09-.091v-.181a108.176 108.176 0 0199.181-64.866c14.869 0 29.34 3.057 43.033 8.972a109.59 109.59 0 0130.426 19.898c1.175 1.085 2.948.976 4.033-.2 1.086-1.175.977-2.948-.198-4.033-9.461-8.773-20.188-15.774-32.108-21.001-14.381-6.313-29.63-9.46-45.295-9.46-45.294 0-86.247 26.789-104.372 68.176-.29.488-1.574 2.46-4.034 5.029-1.085 1.175-1.085 2.948.09 4.033.706.597 1.393.905 2.08.905zm71.288-39.814c-.688-1.483 0-3.147 1.483-3.744 10.727-4.432 21.942-6.801 33.573-6.711a2.864 2.864 0 012.858 2.858 2.864 2.864 0 01-2.858 2.858c-10.835 0-21.363 2.08-31.312 6.313-.29.109-.687.2-1.085.2-1.176 0-2.17-.688-2.66-1.774zM5.235 137.15l.199-.109-1.773-2.261 1.863 2.171c9.95-7.58 15.846-15.575 17.33-19.012 14.959-34.387 48.93-56.654 86.554-56.654 12.898 0 25.506 2.659 37.517 7.778a93.66 93.66 0 0148.351 47.881c.687 1.484 2.37 2.062 3.744 1.484 1.484-.688 2.063-2.37 1.484-3.745-10.148-22.756-28.364-40.79-51.3-50.739-12.699-5.517-25.994-8.285-39.778-8.285-39.885 0-75.936 23.552-91.782 60.11-1.086 2.46-6.205 9.659-15.466 16.75l-.181.09c-1.284.887-1.574 2.659-.687 3.944a2.93 2.93 0 002.37 1.175l.029-.005c.465-.09 1.048-.202 1.526-.573zm218.097-.308c6.783-1.284 13.982-.977 20.675.886 1.484.489 2.37 2.081 1.863 3.636-.397 1.574-2.062 2.37-3.545 1.972-5.806-1.682-12.101-1.972-18.016-.796a312.292 312.292 0 01-20.784 3.346c-1.972.398-3.835.597-5.717.597-3.436.308-6.783.507-9.84.597-4.233.091-7.67 0-10.528-.398-1.085-.199-2.08-.976-2.369-2.062-.094-.46-.232-.967-.381-1.519v-.001a36.042 36.042 0 01-.506-2.025v-.091l-.18-.696c-.752-2.904-1.62-6.255-3.076-9.451-.09 0-.09-.091-.09-.091-6.494-16.352-18.993-29.25-35.147-36.25-33.681-14.58-72.952.886-87.531 34.477-4.143 9.461-14.073 20.983-25.994 30.046-3.636 2.767-7.181 5.137-10.528 7-.398.308-.886.398-1.374.398-.977 0-1.972-.506-2.46-1.483-.778-1.375-.29-3.148 1.085-3.943 3.039-1.683 6.385-3.944 9.84-6.44 11.125-8.466 20.477-19.12 24.221-27.784 15.864-36.558 58.499-53.308 95.021-37.444 17.528 7.579 31.112 21.58 38.203 39.307 1.638 3.45 2.521 6.845 3.313 9.889l.002.009.321 1.226v.091c.194.475.302.951.391 1.343l.007.031c1.284.109 2.949.199 5.119.199h2.659c2.949-.108 6.205-.307 9.551-.596l.28-.034a281.05 281.05 0 015.038-.563c1.683-.398 3.347-.977 5.119-1.773 6.114-2.768 10.727-7.688 13.097-13.892 2.351-6.205 2.152-12.898-.597-19.012-12.409-27.784-34.658-49.762-62.624-61.972-15.466-6.693-31.818-10.148-48.55-10.148-13.386 0-26.59 2.153-39.29 6.494-1.464.488-3.147-.29-3.635-1.773-.488-1.483.29-3.165 1.773-3.654 13.295-4.54 27.17-6.801 41.152-6.801 17.528 0 34.658 3.636 50.811 10.636 29.232 12.717 52.585 35.762 65.572 64.831 3.347 7.488 3.636 15.755.688 23.443a29.834 29.834 0 01-7.182 11.034 57.582 57.582 0 012.231-.432l.001-.001h.003c.637-.115 1.272-.229 1.908-.363zm17.817 14.58c-4.829-1.574-10.039-1.864-15.158-.887-10.528 2.062-20.079 3.455-28.454 4.233a2.744 2.744 0 00-2.569 3.057c.091 1.483 1.375 2.659 2.858 2.659h.29c8.574-.796 18.306-2.171 29.051-4.341 4.232-.796 8.465-.597 12.3.687 1.483.489 3.147-.289 3.636-1.863.416-1.465-.47-3.039-1.954-3.545zm-80.395-7.058c-.684-2.772-1.365-5.533-2.506-7.92 0 0 0-.09-.199-.217-2.858-7.29-7.091-13.603-12.698-18.921-1.176-1.085-1.176-2.858-.091-4.034 1.086-1.176 2.858-1.176 4.034-.09 6.205 5.824 10.926 12.915 14.073 20.892 1.292 2.787 2.056 5.733 2.804 8.614l.008.029.137.528c1.574 6.313 2.659 10.239 6.602 11.035h.199c.887.289 4.541 1.085 12.12 1.085a2.864 2.864 0 012.858 2.858 2.864 2.864 0 01-2.858 2.858c-7.887 0-12.011-.886-13.495-1.284-7.579-1.574-9.351-8.773-10.925-15.177l-.063-.256zM64.91 125.03c.886 0 1.773-.398 2.261-1.176 14.67-19.5 40.664-26.3 63.021-16.551 1.484.597 3.148 0 3.745-1.483.597-1.484 0-3.148-1.483-3.745-24.818-10.835-53.562-3.256-69.914 18.415-.977 1.284-.687 3.057.597 4.034.579.307 1.176.506 1.773.506zm-5.427 5.807c1.483.596 2.08 2.261 1.483 3.744-5.119 11.721-16.442 25.017-30.244 35.581-4.522 3.545-9.063 6.403-13.386 8.773-.488.199-.886.289-1.375.289-1.085 0-2.08-.506-2.568-1.483-.688-1.375-.2-3.039 1.176-3.835 4.033-2.171 8.266-5.029 12.607-8.285 13.097-9.949 23.842-22.357 28.563-33.301.597-1.483 2.26-2.08 3.744-1.483zm158.531 63.347c-10.438 1.573-19.989 2.46-28.545 2.767-1.573 0-2.858 1.375-2.749 2.949 0 1.573 1.284 2.767 2.858 2.767h.109c8.755-.199 18.613-1.176 29.249-2.767a2.77 2.77 0 002.37-3.256c-.235-1.664-1.719-2.75-3.292-2.46zm-90.879 29.068c7.688 5.825 17.438 10.058 28.852 12.518 1.465.289 2.46 1.863 2.171 3.437a2.812 2.812 0 01-2.75 2.261c-.099 0-.199-.023-.298-.045-.1-.023-.199-.046-.299-.046-12.3-2.659-22.737-7.181-31.112-13.494-1.285-.977-1.574-2.749-.597-4.034.976-1.284 2.749-1.573 4.033-.597zm-70.8-23.949c-.976-1.285-2.749-1.484-4.033-.597-4.233 3.147-8.574 6.114-12.807 8.664-1.375.778-1.773 2.569-.977 3.944.489.886 1.483 1.374 2.46 1.374a2.91 2.91 0 001.484-.397c4.431-2.66 8.863-5.717 13.295-9.063 1.266-.868 1.465-2.641.579-3.925zm21.852-16.552c-3.039 3.455-6.295 6.711-9.641 9.859-.58.488-1.285.796-1.882.687-.777 0-1.465-.289-2.062-.886-1.085-1.176-1.085-2.949.09-4.034a162.827 162.827 0 009.262-9.46c1.086-1.176 2.858-1.285 4.034-.199 1.176 1.085 1.284 2.858.2 4.033zm7.09-9.044c2.877-3.582 9.208-12.897 11.74-16.732.905-1.321.561-3.057-.76-3.98-1.32-.904-3.056-.56-3.979.76-.369.543-.82 1.211-1.331 1.966-2.894 4.28-7.682 11.362-10.065 14.314-1.013 1.23-.778 2.985.47 4.016.67.506 1.393.705 2.171.597.597.018 1.23-.38 1.755-.941zm43.233 31.818c10.039 12.319 28.255 18.813 53.959 19.211 1.574 0 2.858 1.266 2.876 2.767a2.864 2.864 0 01-2.858 2.858c-27.567-.488-47.157-7.579-58.282-21.272-6.602-8.086-9.84-17.944-9.551-28.382-2.261 3.546-4.721 6.983-7.38 10.438 1.483 8.465 5.029 16.243 10.636 23.045.977 1.266.778 3.057-.398 4.034-.488.488-1.176.687-1.773.687-.886 0-1.664-.398-2.261-1.085-5.119-6.313-8.773-13.296-10.835-20.983-8.664 10.238-18.794 20.006-30.027 28.471-1.882 1.484-3.944 2.967-5.915 4.342-.507.289-1.086.488-1.683.488a2.979 2.979 0 01-2.37-1.176c-.886-1.284-.596-3.057.688-3.943 1.564-1.09 3.127-2.248 4.636-3.366l.002-.002.002-.001.003-.002v-.001l.002-.001 1.162-.86c21.453-18.83 32.668-29.665 46.596-49.274 1.448-2.351 6.133-1.809 5.21 2.37-3.288 15.147-.881 18.801 5.429 28.378l.001.001.005.007.005.008c.664 1.009 1.372 2.083 2.121 3.243zm74.544 4.432c-4.631.398-9.062.687-13.187.778-25.016.687-42.526-4.142-50.612-13.983-8.574-10.546-4.233-23.75-1.972-28.96 3.256-7.489 3.455-15.755.398-23.443-2.948-7.579-8.755-13.603-16.244-16.841-15.466-6.693-33.572.398-40.265 15.864-6.693 15.267-20.188 31.42-37.227 44.336-4.721 3.545-9.46 6.693-14.073 9.37-1.375.778-1.863 2.568-1.086 3.943.796 1.375 2.569 1.863 3.944 1.085 4.92-2.767 9.84-6.114 14.76-9.749 17.818-13.549 31.981-30.589 38.982-46.742 5.517-12.608 20.187-18.324 32.795-12.915 6.096 2.659 10.726 7.488 13.187 13.693 2.46 6.204 2.369 13.006-.29 19.011-5.716 13.006-4.631 25.813 2.75 34.876 8.755 10.744 25.704 16.153 50.305 16.153 1.573 0 3.256 0 4.829-.091 4.233-.108 8.773-.398 13.585-.796 1.574-.09 2.75-1.573 2.569-3.147-.199-1.357-1.574-2.55-3.148-2.442zM99.26 235.263l.2.199c.664.814 1.39 1.577 2.016 2.236l.001.001c.209.219.407.427.587.621 1.176 1.086 1.176 2.858.091 4.034-.579.597-1.266.887-2.062.887-.688 0-1.375-.308-1.972-.796l-1.085-1.086-.2.199c-.488.489-1.175.688-1.772.688-.886 0-1.664-.398-2.261-1.086-.977-1.284-.778-3.057.398-4.034.343-.298.714-.592 1.085-.886.37-.294.742-.588 1.085-.886.057 0 .084-.025.11-.049a.202.202 0 01.039-.029.098.098 0 01.05-.013c0-.09.109-.199.2-.199 0 0 .108-.09.198-.09.046 0 .095-.023.145-.045.05-.023.1-.046.145-.046.09-.09.199-.09.29-.09.09-.09.198-.09.289-.09h1.158c.044 0 .094.022.144.045.05.022.1.045.145.045.045 0 .095.023.144.045.05.023.1.045.145.045.09 0 .2 0 .29.091 0 0 .108 0 .198.09l.2.199zm28.563 4.939c-8.176-4.432-15.159-10.257-20.784-17.04-1.972-2.46-3.835-5.029-5.409-7.688a.568.568 0 01-.041-.057c-.01-.014-.018-.029-.026-.042-.035-.059-.059-.1-.132-.1a.549.549 0 01-.039-.053l-.014-.022-.014-.024c-.035-.059-.059-.1-.132-.1 0 0-.09-.108-.199-.108-.041-.042-.086-.064-.132-.087a.445.445 0 01-.157-.112c-.091-.091-.199-.091-.199-.091a.378.378 0 01-.145-.045.373.373 0 00-.145-.045.333.333 0 01-.144-.054.331.331 0 00-.145-.055.374.374 0 01-.145-.045.374.374 0 00-.144-.045h-1.159c-.09 0-.198 0-.288.09-.091 0-.2 0-.2.109a.374.374 0 00-.144.045.374.374 0 01-.145.045c-.043 0-.066.021-.09.042-.025.024-.052.049-.109.049a.458.458 0 01-.117.095c-.047.03-.082.052-.082.104a.456.456 0 01-.117.095c-.047.03-.082.052-.082.104-6.204 6.114-12.807 11.92-19.699 17.148-1.284.977-1.483 2.749-.596 4.034.596.796 1.374 1.175 2.26 1.175.598 0 1.176-.199 1.773-.596 6.096-4.631 12.12-9.75 17.727-15.177 1.285 1.863 2.569 3.636 4.034 5.427 6.096 7.398 13.585 13.602 22.448 18.414.398.199.887.398 1.375.398.977 0 1.972-.488 2.569-1.483.651-1.845.163-3.618-1.212-4.305zm-27.712-68.503c1.483.597 2.08 2.261 1.483 3.745-12.843 21.326-21.924 29.484-47.809 46.144-.488.29-1.085.489-1.573.489-.887 0-1.773-.398-2.37-1.285-.796-1.284-.398-3.057.886-3.943 24.999-16.153 32.578-23.136 45.638-43.667.597-1.483 2.261-2.08 3.745-1.483zm18.342-19.12l-9.696-6.041c-1.266-.778-2.93-.398-3.708.868s-.398 2.93.868 3.708l2.569 1.592-5.734 9.189c-.778 1.266-.398 2.93.868 3.708s2.93.398 3.708-.868l5.716-9.171 2.569 1.592c1.266.778 2.93.398 3.708-.868.778-1.249.398-2.931-.868-3.709zm2.297-6.584c-1.212 1.954-3.799 2.55-5.752 1.339a4.19 4.19 0 01-1.339-5.753c1.212-1.953 3.799-2.55 5.752-1.338 1.954 1.212 2.551 3.798 1.339 5.752z"
      clipRule="evenodd"
    />
  </svg>
);

export default WhiteWaterMark;

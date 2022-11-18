class Youtube {
  constructor(httpClient) {
    this.youtube = httpClient;
    this.channelList = [];
    this.finalList = [];
    this.channels = {};
  }
  // constructor(key) {
  //   this.key = key;
  //   this.getRequestOptions = {
  //     method: "GET",
  //     redirect: "follow",
  //   };
  // }

  async mostPopular() {
    const response = await this.youtube.get("videos", {
      params: {
        part: "snippet, statistics",
        chart: "mostPopular",
        maxResults: "30",
        regionCode: "KR",
      },
    });
    this.finalList = [];

    response.data.items.map((item) => {
      // console.log(item)
      return this.finalList.push(this.channel(item.snippet.channelId, item));
    });
    return Promise.all(this.finalList).then((values) => values);
  }
  // async mostPopular() {
  //   const response = await fetch(
  //     `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=25&key=${this.key}`,
  //     this.getRequestOptions
  //   );
  //   const result_1 = await response.json();
  //   return result_1.items;
  // }

  async channel(id, videos) {
    const response = await this.youtube.get("channels", {
      params: {
        part: "snippet, statistics",
        id,
      },
    });
    // console.log(response.data.items[0]);
    if (response.data.items[0].hasOwnProperty("snippet")) {
      response.data.items[0].channelInfo = response.data.items[0].snippet;
      delete response.data.items[0].snippet;
    }

    return (this.channels = { ...response.data.items[0], ...videos });
  }

  async search(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: "30",
        q: query,
        type: "video",
        regionCode: "KR",
      },
    });

    const newVideos = [];

    response.data.items.map((video) => {
      return newVideos.push({ ...video, id: video.id.videoId });
    });

    // return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));

    this.finalList = [];

    newVideos.map((video) => {
      return this.finalList.push(this.channel(video.snippet.channelId, video));
    });

    return Promise.all(this.finalList) //
      .then((values) => values);
  }
  // async search(query) {
  //   const response = await fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}`,
  //     this.getRequestOptions
  //   );
  //   const result_1 = await response.json();
  //   return result_1.items.map((item) => ({ ...item, id: item.id.videoId }));
  // }

  async lapoem() {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: "30",
        q: "lapoem",
        type: "video",
        regionCode: "KR",
      },
    });

    const newVideos = [];

    response.data.items.map((video) => {
      return newVideos.push({ ...video, id: video.id.videoId });
    });

    this.finalList = [];

    newVideos.map((video) => {
      return this.finalList.push(this.channel(video.snippet.channelId, video));
    });

    return Promise.all(this.finalList) //
      .then((values) => values);
  }

  async liveVideo(query) {
    const response = await this.youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: "30",
        q: query,
        type: "video",
        eventType: "live",
        regionCode: "KR",
      },
    });

    const newVideos = [];

    response.data.items.map((video) => {
      return newVideos.push({ ...video, id: video.id.videoId });
    });

    this.finalList = [];

    newVideos.map((video) => {
      return this.finalList.push(this.channel(video.snippet.channelId, video));
    });

    return Promise.all(this.finalList) //
      .then((values) => values);
  }
}

export default Youtube;

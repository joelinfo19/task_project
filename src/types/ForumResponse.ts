
export interface ForumsResponse {
  ok:      boolean;
  forums:  Forum[];
  threads: Thread[];
}

export interface Forum {
  _id:       string;
  title:     string;
  content:   string;
  userId:    string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
}

export interface Thread {
  _id:       string;
  userId:    UserID;
  forumId:   string;
  title:     string;
  content:   string;
  createdAt: Date;
  updatedAt: Date;
  __v:       number;
}

export interface UserID {
  _id:  string;
  name: string;
  img:  string;
  rol?: string;
}

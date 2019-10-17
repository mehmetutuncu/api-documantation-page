<template>
  <div style="width:100%">
    <v-expansion-panels
      multiple
      class="accordionPanel"
      v-for="data in endpoints"
      :key="data.module_name"
    >
      <v-expansion-panel>
        <v-expansion-panel-header>
          <!-- <marquee behavior="alternate" direction="alternate" scrollamount="25"  ><h1 class="moduleName">{{data.module_name}}</h1></marquee> -->
          <h1 class="moduleName">{{data.module_name}}</h1>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-expansion-panel v-for="(data_method, index) in data.datalar" :key="index">
            <v-expansion-panel-header :class="borderSelector[data_method.method_type]">
              <v-flex lg2>
                <span
                  class="methodType"
                  :class="classSelector[data_method.method_type]"
                >{{data_method.method_type}}</span>
              </v-flex>
              <v-flex lg10>
                <span class="methodPath" data-path="/v2.0/users/login">
                  <a class="nostyle">
                    <span>{{data_method.method_path}}</span>
                  </a>
                </span>
              </v-flex>
            </v-expansion-panel-header>
            <v-expansion-panel-content style="margin:10px">
              <h4>Description</h4>
              <div>
                <json-viewer :expand-depth="5" copyable boxed sort :value="data_method.description"></json-viewer>
              </div>
              <h4>Parameter</h4>
              <div>
                <json-viewer :expand-depth="5" copyable boxed sort :value="data_method.body"></json-viewer>
              </div>
              <h4>Responses</h4>
              <div v-for="(response,index) in data_method.responses" :key="index">
                <div>{{response.status_code}}</div>
                <div>
                  <json-viewer :expand-depth="5" copyable boxed sort :value="response.response"></json-viewer>
                </div>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
<script>
import JsonViewer from "vue-json-viewer";
import axios from "axios";
export default {
  components: {
    JsonViewer
  },
  data() {
    return {
      endpoints: [
        {
          datalar: [
            {
              body: {
                email: "example@example.com",
                password: "secretpassword"
              },
              description:
                "Bu endpoint kullan\u0131c\u0131n\u0131n sisteme giri\u015f yapmas\u0131n\u0131 sa\u011flar.",
              method_path: "/v2/users/login",
              method_type: "POST",
              responses: [
                {
                  response: {
                    status: true,
                    token: "secret token"
                  },
                  status_code: "200"
                },
                {
                  response: {
                    code: "user_or_password_wrong",
                    message: "User email or password wrong",
                    status: false,
                    success: false
                  },
                  status_code: "400"
                }
              ]
            },
            {
              body: {
                email: "example@example.com",
                password: "secretpassword"
              },
              description:
                "Bu endpoint kullan\u0131c\u0131n\u0131n sisteme giri\u015f yapmas\u0131n\u0131 sa\u011flar.",
              method_path: "/v2/users/login",
              method_type: "GET",
              responses: [
                {
                  response: {
                    status: true,
                    token: "secret token"
                  },
                  status_code: "200"
                },
                {
                  response: {
                    code: "user_or_password_wrong",
                    message: "User email or password wrong",
                    status: false,
                    success: false
                  },
                  status_code: "400"
                }
              ]
            },
            {
              body: {
                email: "example@example.com",
                password: "secretpassword"
              },
              description:
                "Bu endpoint kullan\u0131c\u0131n\u0131n sisteme giri\u015f yapmas\u0131n\u0131 sa\u011flar.",
              method_path: "/v2/users/login",
              method_type: "DELETE",
              responses: [
                {
                  response: {
                    status: true,
                    token: "secret token"
                  },
                  status_code: "200"
                },
                {
                  response: {
                    code: "user_or_password_wrong",
                    message: "User email or password wrong",
                    status: false,
                    success: false
                  },
                  status_code: "400"
                }
              ]
            },
            {
              body: {
                email: "example@example.com",
                password: "secretpassword"
              },
              description:
                "Bu endpoint kullan\u0131c\u0131n\u0131n sisteme giri\u015f yapmas\u0131n\u0131 sa\u011flar.",
              method_path: "/v2/users/login",
              method_type: "PUT",
              responses: [
                {
                  response: {
                    status: true,
                    token: "secret token"
                  },
                  status_code: "200"
                },
                {
                  response: {
                    code: "user_or_password_wrong",
                    message: "User email or password wrong",
                    status: false,
                    success: false
                  },
                  status_code: "400"
                }
              ]
            }
          ],
          module_name: "Streams Test"
        },
        {
          datalar: [
            {
              body: {
                email: "example@example.com",
                password: "secretpassword"
              },
              description:
                "Bu endpoint kullan\u0131c\u0131n\u0131n sisteme giri\u015f yapmas\u0131n\u0131 sa\u011flar.",
              method_path: "/v2/users/login",
              method_type: "POST",
              responses: [
                {
                  response: {
                    status: true,
                    token: "secret token"
                  },
                  status_code: "200"
                },
                {
                  response: {
                    code: "user_or_password_wrong",
                    message: "User email or password wrong",
                    status: false,
                    success: false
                  },
                  status_code: "400"
                }
              ]
            },
            {
              body: {
                email: "example@example.example",
                first_name: "example",
                last_name: "example",
                password: "secretpassword1",
                password_confirmation: "secretpassword1",
                roles: ["MainUser"]
              },
              description:
                "Bu endpoint kullan\u0131c\u0131n\u0131n sisteme kay\u0131t olmas\u0131n\u0131 sa\u011flar.",
              method_path: "/v2.0/users",
              method_type: "POST",
              responses: [
                {
                  response: {
                    status: true,
                    user: {
                      account_expire_date: "2019-10-30T13:35:51.596564",
                      created_at: "2019-10-16T13:35:51.219506",
                      email: "example@example.example",
                      email_check_code:
                        "7bc81e32ddb9b32507e41ae3f27741a1db1df57f",
                      first_name: "example",
                      id: "5da71cb7512290000becdd28",
                      is_active: false,
                    }
                  },
                  status_code: "200"
                },
                {
                  response: {
                    code: "degisik bir hata",
                    message: "daha degisik bir hata gormedim",
                    status: false,
                    success: false
                  },
                  status_code: "400"
                }
              ]
            }
          ],
          module_name: "Users"
        }
      ],
      classSelector: {
        POST: "postClass",
        GET: "getClass",
        PUT: "putClass",
        DELETE: "deleteClass"
      },
      borderSelector: {
        POST: "postBorderClass",
        GET: "getBorderClass",
        PUT: "putBorderClass",
        DELETE: "deleteBorderClass"
      }
    };
  },
  mounted() {
    // this.get_endpoints();
  },
  methods: {
    get_endpoints() {
      axios
        .get("yourcompanyurl")
        .then(res => {
          this.endpoints = res.data.endpoints;
        });
    }
  }
};
</script>
<style scoped>
.accordionPanel {
  margin-top: 20px;
}

.postClass {
  background: rgb(29, 113, 184);
  font-size: 14px;
  text-align: center;
  color: #fff !important;
  border-radius: 0;
}
.getClass {
  font-size: 14px;
  text-align: center;
  color: #fff !important;
  border-radius: 0;

  background-color: #78bc61;
}

.deleteClass {
  font-size: 14px;
  text-align: center;
  color: #fff !important;
  border-radius: 0;

  background-color: tomato;
}

.putClass {
  font-size: 14px;
  text-align: center;
  color: #fff !important;
  border-radius: 0;

  background-color: #fed330;
}

.methodType {
  width: 70px;
  height: 36px;
  text-align: center;
  display: block;
  line-height: 36px;
}

.postBorderClass {
  border-bottom: 1px solid rgb(29, 113, 184);
}
.getBorderClass {
  border-bottom: 1px solid #78bc61;
}
.putBorderClass {
  border-bottom: 1px solid #fed330;
}
.deleteBorderClass {
  border-bottom: 1px solid tomato;
}

.moduleName {
  font-family: Source Sans Pro;
}

a.nostyle {
  text-decoration: inherit;
  color: inherit;
  cursor: pointer;
}
</style>



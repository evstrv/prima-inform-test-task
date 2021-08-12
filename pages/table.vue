<template>
    <v-row>
        <v-col class="text-center">
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="items"
                :single-expand="singleExpand"
                :single-select="singleSelect"
                :expanded.sync="expanded"
                :loading="loading"
                show-expand
                show-select
                class="elevation-1"
            >
                <template v-slot:top>
                    <v-toolbar flat>
                    <v-toolbar-title>Users</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-switch
                        v-model="singleExpand"
                        label="Single expand"
                        class="mt-4 mr-4"
                    ></v-switch>
                    <v-switch
                        v-model="singleSelect"
                        label="Single select"
                        class="mt-4"
                    ></v-switch>
                    </v-toolbar>
                </template>
                <template v-slot:expanded-item="{ headers, item }">
                    <td :colspan="headers.length">
                        <div class="my-4 d-flex align-center justify-center flex-column">
                            <span>Full address: {{ item.address.country }} → {{ item.address.state }} → {{ item.address.city }}</span>
                            <span>Phone number: {{ item.phone_number }}</span>
                        </div>
                    </td>
                </template>
            </v-data-table>
        </v-col>
    </v-row>
</template>

<script>
import getUsers from "@/core/getUsers.js"

export default {
    data() {
        return {
            expanded: [],
            singleExpand: false,
            selected: [],
            singleSelect: false,
            items: [],
            loading: false,
            headers: [
                {
                    text: "First name",
                    value: 'first_name',
                    align: 'left'
                },
                {
                    text: "Last name",
                    value: 'last_name',
                    align: 'left'
                },
                {
                    text: "Gender",
                    value: 'gender',
                    align: 'left'
                },
                {
                    text: "Date of birth",
                    value: 'date_of_birth',
                    align: 'left'
                },
                {
                    text: "Email",
                    value: 'email',
                    align: 'left'
                },
                { 
                    text: '', 
                    value: 'data-table-select' 
                },
                { 
                    text: '', 
                    value: 'data-table-expand' 
                },
            ]
        }
    },

    watch: {
        selected() {
            console.log(this.selected);
        }
    },

    async mounted() {
        this.loading = true
        await getUsers().then((response) => {
            this.items = response;
            this.loading = false;
        });
    }
}
</script>
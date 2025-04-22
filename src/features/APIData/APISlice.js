import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAPIData = createAsyncThunk(
    'fetchAPIData',
    async (newMessages, thunkAPI) => {
        try {
            const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "llama3-70b-8192",
                    messages: newMessages,
                }),
            });

            const data = await res.json();
            const reply = data.choices?.[0]?.message?.content;
            return reply
        } catch (error) {
            return thunkAPI.rejectWithValue('Failed to fetch users');
        }
    }
);

export const APISlice = createSlice({
    name: 'data',
    initialState: {
        messages: [],
        loading: false,
        error: null,
    },
    reducers: {
        addUserMessage: (state, action) => {
            state.messages.push({ role: "user", content: action.payload });
          },
    }, 
    extraReducers : (builder) => {
        builder
        .addCase(fetchAPIData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchAPIData.fulfilled, (state, action) => {
          state.loading = false;
          state.messages.push({ role: "assistant", content: action.payload });
        })
        .addCase(fetchAPIData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    }

})

export const {addUserMessage} = APISlice.actions
export default APISlice.reducer
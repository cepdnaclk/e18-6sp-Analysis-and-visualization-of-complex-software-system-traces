import pandas as pd
import gensim
import json

# Load the cluster word sets from the JSON file
with open('cluster_word_sets.json', 'r') as json_file:
    cluster_word_sets = json.load(json_file)
    
# Function to clean and preprocess column names
def clean_and_preprocess(col_names):
    cleaned_cols = []
    for col in col_names:
        # Clean and preprocess the column name using gensim
        cleaned_col = gensim.utils.simple_preprocess(col)
        cleaned_cols.extend(cleaned_col)
    return cleaned_cols

# Function to calculate similarity between two lists of strings
def similarity(list1, list2):
    common_elements = set(list1) & set(list2)
    total_elements = set(list1) | set(list2)
    return len(common_elements) / len(total_elements)

def getPrediction(filePath):
    # Load the new log file as a DataFrame
    new_log_file = pd.read_csv(filePath)

    # Clean and preprocess the column names of the new log file
    new_log_columns = clean_and_preprocess(new_log_file.columns.tolist())

    # Initialize variables to track the most similar cluster
    predictions = {}
    # Compare the new log file columns with each cluster's word set
    for cluster_num, cluster_words in cluster_word_sets.items():
        sim_score = similarity(new_log_columns, cluster_words)
        predictions[int(cluster_num)] = sim_score

    # Print the cluster that the new log file belongs to
    return predictions
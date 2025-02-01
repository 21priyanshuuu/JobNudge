import sys
import json
import joblib
import numpy as np

# Load the model and scaler
svc_model = joblib.load('SVC_model.pkl')
scaler = joblib.load('scaler.pkl')

# Define the categorical mappings based on the training mappings
categorical_mapping = {
    'self-learning capability?': {'no': 0, 'yes': 1},
    'Extra-courses did': {'no': 0, 'yes': 1},
    'certifications': {
        'app development': 0, 'distro making': 1, 'full stack': 2, 'hadoop': 3,
        'information security': 4, 'machine learning': 5, 'python': 6, 'r programming': 7,
        'shell programming': 8
    },
    'workshops': {
        'cloud computing': 0, 'data science': 1, 'database security': 2, 'game development': 3,
        'hacking': 4, 'system designing': 5, 'testing': 6, 'web technologies': 7
    },
    'reading and writing skills': {'excellent': 0, 'medium': 1, 'poor': 2},
    'memory capability score': {'excellent': 0, 'medium': 1, 'poor': 2},
    'Interested subjects': {
        'Computer Architecture': 0, 'IOT': 1, 'Management': 2, 'Software Engineering': 3,
        'cloud computing': 4, 'data engineering': 5, 'hacking': 6, 'networks': 7,
        'parallel computing': 8, 'programming': 9
    },
    'interested career area ': {
        'Business process analyst': 0, 'cloud computing': 1, 'developer': 2, 'security': 3,
        'system developer': 4, 'testing': 5
    },
    'Type of company want to settle in?': {
        'BPA': 0, 'Cloud Services': 1, 'Finance': 2, 'Product based': 3, 'SAaS services': 4,
        'Sales and Marketing': 5, 'Service Based': 6, 'Testing and Maintainance Services': 7,
        'Web Services': 8, 'product development': 9
    },
    'Taken inputs from seniors or elders': {'no': 0, 'yes': 1},
    'Interested Type of Books': {
        'Action and Adventure': 0, 'Anthology': 1, 'Art': 2, 'Autobiographies': 3,
        'Biographies': 4, 'Childrens': 5, 'Comics': 6, 'Cookbooks': 7, 'Diaries': 8,
        'Dictionaries': 9, 'Drama': 10, 'Encyclopedias': 11, 'Fantasy': 12, 'Guide': 13,
        'Health': 14, 'History': 15, 'Horror': 16, 'Journals': 17, 'Math': 18, 'Mystery': 19,
        'Poetry': 20, 'Prayer books': 21, 'Religion-Spirituality': 22, 'Romance': 23,
        'Satire': 24, 'Science': 25, 'Science fiction': 26, 'Self help': 27, 'Series': 28,
        'Travel': 29, 'Trilogy': 30
    },
    'Management or Technical': {'Management': 0, 'Technical': 1},
    'hard/smart worker': {'hard worker': 0, 'smart worker': 1},
    'worked in teams ever?': {'no': 0, 'yes': 1},
    'Introvert': {'no': 0, 'yes': 1}
}

# Define the reverse mapping for job roles
job_role_mapping = {
    0: 'Applications Developer',
    1: 'CRM Technical Developer',
    2: 'Database Developer',
    3: 'Mobile Applications Developer',
    4: 'Network Security Engineer',
    5: 'Software Developer',
    6: 'Software Engineer',
    7: 'Software Quality Assurance (QA) / Testing',
    8: 'Systems Security Administrator',
    9: 'Technical Support',
    10: 'UX Designer',
    11: 'Web Developer'
}

def encode_categorical(feature, value):
    return categorical_mapping.get(feature, {}).get(value.lower(), 0)

def main():
    # Read input data from the temporary file
    input_file = sys.argv[1]
    with open(input_file, 'r') as f:
        form_data = json.load(f)

    # Extract and encode features
    numerical_data = [
        form_data['logical_quotient'], form_data['hackathons'],
        form_data['coding_skills'], form_data['public_speaking']
    ]

    categorical_data = [
        encode_categorical('self-learning capability?', form_data['self_learning']),
        encode_categorical('Extra-courses did', form_data['extra_courses']),
        encode_categorical('certifications', form_data['certifications']),
        encode_categorical('workshops', form_data['workshops']),
        encode_categorical('reading and writing skills', form_data['reading_writing']),
        encode_categorical('memory capability score', form_data['memory_capability']),
        encode_categorical('Interested subjects', form_data['interested_subjects']),
        encode_categorical('interested career area ', form_data['interested_career_area']),
        encode_categorical('Type of company want to settle in?', form_data['company_type']),
        encode_categorical('Taken inputs from seniors or elders', form_data['senior_inputs']),
        encode_categorical('Interested Type of Books', form_data['book_type']),
        encode_categorical('Management or Technical', form_data['management_or_technical']),
        encode_categorical('hard/smart worker', form_data['worker_type']),
        encode_categorical('worked in teams ever?', form_data['teamwork']),
        encode_categorical('Introvert', form_data['introvert'])
    ]

    # Convert lists to arrays
    numerical_data_array = np.array(numerical_data).reshape(1, -1)
    categorical_data_array = np.array(categorical_data).reshape(1, -1)

    # Scale only the numerical features
    numerical_features_scaled = scaler.transform(numerical_data_array)

    # Combine the scaled numerical features with the categorical features
    feature_array_scaled = np.hstack((numerical_features_scaled, categorical_data_array))

    # Predict job role
    prediction_numeric = svc_model.predict(feature_array_scaled)[0]
    prediction = job_role_mapping[prediction_numeric]

    # Output the prediction result
    result = {"prediction": prediction}
    print(json.dumps(result))

if __name__ == "__main__":
    main()
